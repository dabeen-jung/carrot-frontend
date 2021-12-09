import { useState } from "react";
import Typography from "@mui/material/Typography";
type TradeType = {
  title: string;
  price: number;
  location: string;
};

const TradeInformation = (props: TradeType) => {
  const {} = props;

  return (
    <>
      <Typography variant="h5"></Typography>;
    </>
  );
};

export default TradeInformation;
