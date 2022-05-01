import {
  Box,
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  TextField,
} from "@mui/material";
import { useParams } from "react-router-dom";
import MessageCard from "../MessageCard";

export const ChatScreen = () => {
  const { id, name } = useParams();
  return (
    <Box flexGrow={1}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", boxShadow: "0" }}
      >
        <Toolbar>
          <Avatar
            src={`https://avatars.dicebear.com/api/initials/${name}.svg`}
            sx={{ width: "32px", height: "32px", mr: "4px" }}
          ></Avatar>
          <Typography variant="h6" color="black">
            {name}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{ backgroundColor: "#f5f5f5", overflowY: "auto" }}
        height="80vh"
        padding="10px"
      >
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="end" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="start" />
        <MessageCard text="Hi Mukesh" date="1223" direction="end" />
      </Box>
      <TextField
        placeholder="Enter a Message"
        variant="standard"
        fullWidth
        multiline
        rows={2}
      ></TextField>
    </Box>
  );
};
