import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import GeneralJobPositionService from "../services/generalJobPositionService";

export default function GeneralJobPositionList() {
  const [generalJobPositions, setgeneralJobPositions] = useState([]);

  useEffect(() => {
    let generalJobPositionService = new GeneralJobPositionService();
    generalJobPositionService
      .getGeneralJobPositions()
      .then((result) => setgeneralJobPositions(result.data.data));
  },[]);

  return (
    <div>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Genel Pozisyon No</Table.HeaderCell>
          <Table.HeaderCell>Genel Pozisyon Adı</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {generalJobPositions.map((generalJobPosition) => (
          <Table.Row key={generalJobPosition.id}>
            <Table.Cell>{generalJobPosition.id}</Table.Cell>
            <Table.Cell>{generalJobPosition.jobPositionName}</Table.Cell>
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