import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container,Button, Menu, Icon } from 'semantic-ui-react';
import CartSummary from "../layouts/CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory} from "react-router";
import "../App.css";
import { useSelector } from "react-redux";

export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history= useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu size="large" inverted stackable>
        <Container>
          <Menu.Item name="Ana Sayfa"as={Link} to={"/"}>
          <Icon name="home" />Ana Sayfa
          </Menu.Item> 
          <Menu.Item name="İş ilanları" as={Link} to={"/jobadvertisementlist"}  />
          <Menu.Item name="Özgeçmişler" as={Link} to={"/jobseekerlist"} />
          <Menu.Menu position="right" style={{ margin: '0.5em' }}>
          <Button primary as={Link} to={"/jobadvertisementcrate"}>
              İş İlanı Ekle
            </Button>
            {cartItems.length > 0 && <CartSummary/>}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} bisey="1" />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}