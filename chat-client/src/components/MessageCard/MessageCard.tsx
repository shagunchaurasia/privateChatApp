import { Box, Typography } from "@mui/material";

export const MessageCard = (props: any) => {
  return (
    <Box display="flex" justifyContent={props.direction}>
      <Box>
        <Typography variant="subtitle2" padding="5px" bgcolor="white">
          {props.text}
        </Typography>
        <Typography variant="caption">{props.date}</Typography>
      </Box>
    </Box>
  );
};
