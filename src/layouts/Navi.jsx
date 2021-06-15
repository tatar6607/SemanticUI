import React from "react";
import { Button, Menu, Container } from "semantic-ui-react";
import CartSummary from "./CartSummary";

function Navi() {
  return (
    <div>
      <div>
        <Menu inverted size="large" attached>
          <Container>
            <Menu.Item name="home" />
            <Menu.Item name="messages" />
            <Menu.Menu position="right">
              <CartSummary />
              <Menu.Item>
                <Button primary>Sign Up</Button>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    </div>
  );
}

export default Navi;
