import { AuthenticationError, ForbiddenError } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: async (parent: any, args: any, context: any) => {
      console.log(context);
      if (!context.userId) {
        throw new ForbiddenError(
          "You must be signed in to access this resource"
        );
      }
      const users = await prisma.user.findMany({
        orderBy: { createdAt: "desc" },
        where: { id: { not: context.userId } },
      });
      return users;
    },
    messagesByUser: async (parent: any, args: any, context: any) => {
      if (!context.userId) {
        throw new ForbiddenError(
          "You must be signed in to access this resource"
        );
      }
      const messages = await prisma.message.findMany({
        where: {
          OR: [
            {
              senderId: context.userId,
              receiverId: args.receiverId,
            },
            {
              senderId: args.receiverId,
              receiverId: context.userId,
            },
          ],
        },
        orderBy: {
          createdAt: "asc",
        },
      });
      return messages;
    },
  },

  Mutation: {
    signUpUser: async (parent: any, args: any, context: any) => {
      const { userNew } = args;
      const user = await prisma.user.findUnique({
        where: { email: userNew.email },
      });
      if (user) {
        throw new AuthenticationError("User already exists");
      }

      const passwordHashed = await bcrypt.hash(userNew.password, 10);

      const newUser = await prisma.user.create({
        data: {
          ...userNew,
          password: passwordHashed,
        },
      });

      return newUser;
    },
    signInUser: async (parent: any, args: any, context: any) => {
      const { userDetails } = args;
      const user = await prisma.user.findUnique({
        where: { email: userDetails.email },
      });

      if (!user) {
        throw new AuthenticationError(
          "User doesn't exist with the provided email"
        );
      }
      const passwordMatch = await bcrypt.compare(
        userDetails.password,
        user.password
      );

      if (!passwordMatch) {
        throw new AuthenticationError("Email or Password invalid");
      }
      const JWT_SECRET = process.env.JWT_SECRET!;
      const token = jwt.sign({ userId: user.id }, JWT_SECRET);
      return { token };
    },
    createMessage: async (parent: any, args: any, context: any) => {
      const { receiverId, text } = args;
      const loggedInUser = context.userId;
      if (!loggedInUser) {
        throw new ForbiddenError("You must be signed in to send a message");
      }

      const messageSend = await prisma.message.create({
        data: {
          text,
          receiverId,
          senderId: loggedInUser,
        },
      });
      return messageSend;
    },
  },
};

export default resolvers;
