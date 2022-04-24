import { Box } from "@mui/material";
import SideBar from "../../components/SideBar";
import { Route, Routes } from "react-router-dom";
import Welcome from "../../components/Welcome";
import ChatScreen from "../../components/ChatScreen";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route path="/:id/:name" element={<ChatScreen />}></Route>
    </Routes>
  );
};

export const HomePage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar></SideBar>
      <AllRoutes />
    </Box>
  );
};
