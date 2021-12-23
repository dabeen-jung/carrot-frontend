/* 거래화면 꾸미기*/
import {
  Avatar,
  Box,
  Grid,
  Typography,
  LinearProgress,
  Toolbar,
  Button,
} from "@mui/material";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TradeAppBar from "./components/TradeAppBar";

const TradeDetail = (): JSX.Element => {
  return (
    <>
      <Box paddingTop="20px">
        <Grid container>
          <Grid item xs={1}>
            <Avatar src="프로필 이미지 주소" sx={{ width: 80, height: 80 }} />
          </Grid>

          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">아이디</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">지역</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h6" color="primary">
                  36.6℃
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Grid>
              <Grid item xs={4}>
                <SentimentSatisfiedIcon fontSize="large" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <hr />
      <Typography variant="h4">물건 제목</Typography>
      <Box>
        어쩌고 저쩌고 내용내용~ 그리하여 얼마 어쩌고
        <br />
        저꺼 강남역에서 팔겠수 그리고 얼마나 싸고 비싸고 한지 알아서
        <br />
        네고해드림다 택배는 2500원 직거래는 배송비 없슴다~~
      </Box>
      <TradeAppBar isInterest={true} isAdjustable={false} price={5000} />
    </>
  );
};

export default TradeDetail;
