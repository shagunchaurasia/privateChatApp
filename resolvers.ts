import { AuthenticationError } from 'apollo-server';
import {PrismaClient} from "@prisma/client";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const prisma = new PrismaClient();

const resolvers = {
  Query: {},
 
  Mutation: {
    signUpUser: async(parent: any, args: any, context: any) => {
        const {userNew} = args;
      const user  = await prisma.user.findUnique({ where: { email: userNew.email } });
      if(user){
          throw new AuthenticationError("User already exists")
      }

      const passwordHashed = await bcrypt.hash(userNew.password, 10);

     const newUser =  await prisma.user.create({
        data: {
          ...userNew,
          password: passwordHashed
        },
      });

      return newUser;
    },
    signInUser: async(parent: any, args: any, context: any)=>{
        const {userDetails} = args;
      const user = await prisma.user.findUnique({
        where: { email: userDetails.email },
      });

      if(!user){
          throw new AuthenticationError("User doesn't exist with the provided email")
      }
    const passwordMatch =  await bcrypt.compare(userDetails.password, user.password);

    if(!passwordMatch){
        throw new AuthenticationError("Email or Password invalid")
    }
    const JWT_SECRET = process.env.JWT_SECRET!;
    const token = jwt.sign({userId: user.id}, JWT_SECRET)
    return {token};

      
 

    }
  },
};

export default resolvers;
