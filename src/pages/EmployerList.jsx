import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  },[]);

  return (
    <div>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>İşveren No</Table.HeaderCell>
          <Table.HeaderCell>İşveren Adı</Table.HeaderCell>
          <Table.HeaderCell>İşveren Web Sitesi</Table.HeaderCell>
          <Table.HeaderCell>İşveren Telefon</Table.HeaderCell>
          <Table.HeaderCell>İşveren E-posta Adresi</Table.HeaderCell>
          <Table.HeaderCell>İşveren E-posta Doğrulama</Table.HeaderCell>
          <Table.HeaderCell>İşveren E-posta Doğrulama Tarihi</Table.HeaderCell>
          <Table.HeaderCell>İşveren E-posta Sistem Doğrulama</Table.HeaderCell>
          <Table.HeaderCell>İşveren E-posta Sistem Doğrulama Tarihi</Table.HeaderCell>
          <Table.HeaderCell>İşveren Aktif mi</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {employers.map((employer) => (
          <Table.Row key={employer.id}>
            <Table.Cell>{employer.id}</Table.Cell>
            <Table.Cell>{employer.companyName}</Table.Cell>
            <Table.Cell>{employer.companyWebSiteDomain}</Table.Cell>
            <Table.Cell>{employer.companyTelephoneNumber}</Table.Cell>
            <Table.Cell>{employer.baseUser?.emailAddress}</Table.Cell>
            {employer.isEmailValidationPerformed ? (
              <Table.Cell>Evet</Table.Cell>
            ) : (
              <Table.Cell>Hayır</Table.Cell>
            )}
            <Table.Cell>{employer.emailValidationDate}</Table.Cell>
            {employer.isEmailValidationPerformedBySystem ? (
              <Table.Cell>Evet</Table.Cell>
            ) : (
              <Table.Cell>Hayır</Table.Cell>
            )}  
            <Table.Cell>{employer.emailValidationPerformedBySystemDate}</Table.Cell>
            {employer.baseUser?.status ? (
              <Table.Cell>Aktif</Table.Cell>
            ) : (
              <Table.Cell>Pasif</Table.Cell>
            )}
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