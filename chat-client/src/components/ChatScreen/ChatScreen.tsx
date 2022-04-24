import { useParams } from "react-router-dom";

export const ChatScreen = () => {
  const { id, name } = useParams();
  return (
    <div>
      ChatScreen {id}
      {name}
    </div>
  );
};
