import React from "react";
import { Dropdown, Label } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Dropdown item text="İlgilendiğiniz ilanlar">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item key={cartItem.jobAdvertisement.id}>
              {cartItem.jobAdvertisement.jobDefiniton}
              <Label>{cartItem.quantity}</Label>
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            İlgilendiğim ilanlara git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
