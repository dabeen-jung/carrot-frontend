import Typography from "@mui/material/Typography";
import moment from "moment";
import { Box } from "@mui/system";

type TradeInformationType = {
  title: string;
  price: number;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
};

const TradeInformation = (information: TradeInformationType) => {
  const { title, price, location, createdAt, updatedAt } = information;
  /*props에 있는 매개변수 뽑기 */
  const date = updatedAt != null ? moment(updatedAt) : moment(createdAt);
  const displayDate = date.format("YYYY-MM-DD HH:mm");

  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1" style={{ color: "rgba(0,0,0,0.5)" }}>
        {location}*{displayDate}
      </Typography>
      <Typography variant="subtitle1">
        <strong>{price}원</strong>
      </Typography>
      ;
    </Box>
  );
};

export default TradeInformation;
