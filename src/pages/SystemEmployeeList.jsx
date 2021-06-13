import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import SystemEmployeeService from "../services/systemEmployeeService";

export default function SystemEmployeeList() {
  const [systemEmployees, setsystemEmployees] = useState([]);

  useEffect(() => {
    let systemEmployeeService = new SystemEmployeeService();
    systemEmployeeService
      .getSystemEmployees()
      .then((result) => setsystemEmployees(result.data.data));
  },[]);

  return (
    <div>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Sistem Çalışanı No</Table.HeaderCell>
          <Table.HeaderCell>Sistem Çalışanı Adı</Table.HeaderCell>
          <Table.HeaderCell>Sistem Çalışanı Soyadı</Table.HeaderCell>
          <Table.HeaderCell>Sistem Çalışanı E-posta Adresi</Table.HeaderCell>
          <Table.HeaderCell>Sistem Çalışanı Unvanı</Table.HeaderCell>
          <Table.HeaderCell>Sistem Çalışanı TC Kimlik No</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {systemEmployees.map((systemEmployee) => (
          <Table.Row key={systemEmployee.id}>
            <Table.Cell>{systemEmployee.id}</Table.Cell>
            <Table.Cell>{systemEmployee.firstName}</Table.Cell>
            <Table.Cell>{systemEmployee.lastName}</Table.Cell>
            <Table.Cell>{systemEmployee.baseUser?.emailAddress}</Table.Cell>
            <Table.Cell>{systemEmployee.jobTitle}</Table.Cell>
            <Table.Cell>{systemEmployee.nationalityId}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  </div>
);
}