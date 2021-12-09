import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import { tradeItems } from "./data";

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
                <ListItemText primary={item.title} secondary={item.location} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Home;
