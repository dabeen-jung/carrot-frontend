import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import { tradeItems } from "./data";
import TradeInformation from "./components/TradeInformation";
import TradeEvent from "./components/TradeEvent";
import { useEffect, useState } from "react";
import axios from "axios";

/* 컴포넌트 실행에 필요한 값  : props
props는 함수에  매개변수처럼 전달 받음 -> (props: 어쩌구 타입)

*/

type TradeItem = {
  id: string;
  image: string;
  title: string;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
  price: number;
  chat?: number;
  interest?: number;
};

const ImageTheme = {
  width: "120px",
  height: "120px",
};

const Home = (): JSX.Element => {
  const [tradeItems, setTradeItems] = useState<TradeItem[]>([]);
  const readArticles = async () => {
    const { data } = await axios.get("http://localhost:5000/trade/articles");
    setTradeItems(data);
  };
  useEffect(() => {
    //화면이 그려지면서 서버로부터 데이터 전달 받음
    //비동기 처리가 어렵기 때문에 readArticles()라는를 사용
    readArticles();
  }, []);
  return (
    <Box>
      <List>
        {/* 원래라면 item : TradeItem을 썼겠지만 
        import해서 이미 인식함으로 타입 안써줘도 된다. */}
        {tradeItems.map((item): JSX.Element => {
          return (
            <ListItem key={item.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar variant="rounded" src={item.image} sx={ImageTheme} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <TradeInformation
                      title={item.title}
                      location={item.location}
                      price={item.price}
                      createdAt={item.createdAt}
                    />
                  }
                  secondary={
                    <TradeEvent chat={item.chat} interest={item.interest} />
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Home;
