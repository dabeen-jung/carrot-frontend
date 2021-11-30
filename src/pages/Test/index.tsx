import React from "react";
// import Calculator from "./components/Calculator";
import { Container, Grid } from "@mui/material";

const Test = () => {
  // return <Calculator />;
  return (
    <Container style={{ backgroundColor: "#022fff" }}>
      hello
      <Grid container style={{ backgroundColor: "#ff2fff" }}>
        <Grid item xs={12} md={6}>
          xs-12
        </Grid>
        <Grid item xs={12} md={6}>
          xs-12
        </Grid>
      </Grid>
      <Grid container style={{ backgroundColor: "#ff9fff" }}>
        <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
          xs-6
        </Grid>

        <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
          xs-6
        </Grid>
        <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
          xs-6
        </Grid>
        <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
          xs-6
        </Grid>
      </Grid>
    </Container>
  );
};

export default Test;

/*Container 화면의 크기에 따라 중앙에 배치 해줌  */
