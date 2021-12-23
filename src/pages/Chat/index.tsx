import AppBar from "@mui/material/AppBar";
import {
  Box,
  TextField,
  Avatar,
  Typography,
  Grid,
  Toolbar,
  Button,
  IconButton,
  Chip,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import moment from "moment";
import { messages } from "./data";
//채팅창 만들기

const Chat = (): JSX.Element => {
  const myId = "me";
  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "#ffffff",
          color: "#000000",
        }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={1}>
              <Avatar variant="rounded" />
            </Grid>

            <Grid item xs={9}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">1600원</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2}>
              <Button variant="outlined" color="secondary">
                거래 후기 남기기
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* 채팅 */}
      <Box>
        <Grid container>
          {messages.map((message): JSX.Element => {
            return (
              <Grid item xs={12} key={message.id}>
                {message.sender !== myId && (
                  <Box display="flex" justifyContent="left" alignItems="end">
                    <Chip label={message.message} />
                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                  </Box>
                )}

                {message.sender === myId && (
                  <Box display="flex" justifyContent="right" alignItems="end">
                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                    <Chip label={message.message} />
                  </Box>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* 
top: 최상단 기준으로 얼마나 띄울건지, bottom: 0-끝 -> 밑에 딱 붙여줘 */}
      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#ffffff" }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={11}>
              <TextField fullWidth variant="outlined" />
            </Grid>

            <Grid item xs={1}>
              <Box display="flex" justifyContent="center">
                <IconButton>
                  <SendIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Chat;
