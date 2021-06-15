import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Categories from "./Categories";
import Navi from "./Navi";
import ProductList from "../pages/ProductList";
function Dashboard() {
  return (
    <div>
      <Navi />
      <Container>
        <Grid columns={2} padded>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductList />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
