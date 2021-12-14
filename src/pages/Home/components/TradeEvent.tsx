import { useState, ChangeEvent } from "react";
import ChatIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Box } from "@mui/system";

type TradeType = {
  chat?: number;
  interest?: number;
};
const TradeEvent = (props: TradeType): JSX.Element => {
  const { chat, interest } = props;

  return (
    <Box>
      {chat && (
        <>
          <ChatIcon />
          {chat}
        </>
      )}
      {interest && (
        <>
          <FavoriteIcon />
          {interest}
        </>
      )}
    </Box>
  );
};

export default TradeEvent;
