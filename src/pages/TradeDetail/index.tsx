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
import { useState, useEffect } from "react";
import axios from "axios";

type TradeItem = {
  id: string;
  image: string;
  title: string;
  description: string;
  location: string;
  price: number;
  chat?: number;
  isAdjustable: boolean;
  createdAt: Date;
  updatedAt?: Date;
};

const TradeDetail = (): JSX.Element => {
  //[값 ,값 정의해주는 함수]
  const [article, setArticle] = useState<TradeItem>();
  const getArticles = async () => {
    const { data } = await axios.get("http://localhost:5000/trade/articles/1");
    setArticle(data);
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <>
      <Box paddingTop="20px">
        <Grid container>
          <Grid item xs={1}>
            <Avatar
              src={article && article.image}
              sx={{ width: 80, height: 80 }}
            />
          </Grid>

          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">아이디</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  {article && article.title}
                </Typography>
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
                <Box display="flex" justifyContent="center" alignItems="center">
                  <SentimentSatisfiedIcon fontSize="large" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <hr />
      <Typography variant="h4">{article && article.title}</Typography>
      <Box>{article && article.description}</Box>
      {article && (
        <TradeAppBar
          isInterest={true}
          isAdjustable={article.isAdjustable}
          price={article.price}
        />
      )}
    </>
  );
};

export default TradeDetail;
