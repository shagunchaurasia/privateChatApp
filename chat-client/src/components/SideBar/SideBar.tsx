import { Box, Typography, Divider } from "@mui/material";
import UserCard from "../UserCard";

export const SideBar = () => {
  const users = [
    {
      id: "3",
      firstName: "Rohit",
      lastName: "Chaurasia",
      email: "chaurasia.rohit@gmail.com",
    },
    {
      id: "2",
      firstName: "Nupur",
      lastName: "Chaurasia",
      email: "chaurasia.nupur@gmail.com",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#f7f7f7",
        height: "100vh",
        width:"250px",
        padding:"10px"
      }}
    >
      <Typography variant="h6">Chat</Typography>
      <Divider />
      {users.map((item) => {
        return <UserCard key={item.id} userDetails={item}></UserCard>;
      })}
    </Box>
  );
};
