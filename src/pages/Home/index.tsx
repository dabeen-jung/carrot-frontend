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

/* 컴포넌트 실행에 필요한 값  : props
props는 함수에  매개변수처럼 전달 받음 -> (props: 어쩌구 타입)

*/
const ImageTheme = {
  width: "120px",
  height: "120px",
};

const Home = (): JSX.Element => {
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
                  <Avatar
                    variant="rounded"
                    src={item.imageUrl}
                    sx={ImageTheme}
                  />
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
                  //secondary={<TradeEvent chat={chat} />}
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
