import React from "react";
import { Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="İlgilendiğiniz ilanlar">
        <Dropdown.Menu>
          <Dropdown.Item>Yazılım Geliştirme Uzmanı</Dropdown.Item>
          <Dropdown.Item>Sistem Yöneticisi</Dropdown.Item>
          <Dropdown.Item>Veri Tabanı Yöneticisi</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            İlgilendiğim ilanlara git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}