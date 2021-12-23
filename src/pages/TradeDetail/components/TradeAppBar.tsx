import { Grid, Typography, Toolbar, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

//관심 유무, 가격, 가격제안 여부
type TradeAppType = {
  price: number;
  isInterest: boolean;
  isAdjustable: boolean;
};

const TradeAppBar = (props: TradeAppType) => {
  const { price, isInterest, isAdjustable } = props;
  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#ffffff" }}
      >
        <Toolbar>
          <Grid container>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              {isInterest ? (
                <FavoriteIcon color="secondary" fontSize="large" />
              ) : (
                <FavoriteBorderIcon color="primary" fontSize="large" />
              )}

              {/* {isInterest && (
                <>
                  <FavoriteIcon color="primary" fontSize="large" />
                </>
              )} */}
              {!isInterest && (
                <>
                  <FavoriteBorderIcon color="primary" fontSize="large" />
                </>
              )}
            </Grid>

            <Grid item xs={8}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h5" color="#2b2b2b">
                    <strong>{price}원</strong>
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="#2b2b2b">
                    <strong>
                      {isAdjustable ? "가격 제안 가능" : "가격 제안 불가"}
                    </strong>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <Button variant="contained" color="secondary" fullWidth>
                채팅으로 거래하기
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TradeAppBar;
