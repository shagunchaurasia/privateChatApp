import { Stack, Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./UserCard.style.scss";

export const UserCard = ({ userDetails }: any) => {
  console.log(userDetails);
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ py: 1 }}
      className="userCard"
      onClick={() => navigate(`/${userDetails.id}/${userDetails.firstName} ${userDetails.lastName}`)}
    >
      <Avatar
        src={`https://avatars.dicebear.com/api/initials/${userDetails.firstName} ${userDetails.lastName}.svg`}
        sx={{ width: "32px", height: "32px" }}
      ></Avatar>
      <Typography variant="subtitle2">
        {userDetails.firstName} {userDetails.lastName}
      </Typography>
    </Stack>
  );
};
