import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  },[]);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru</Table.HeaderCell>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Şirket Web Sitesi</Table.HeaderCell>
            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Yayın Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.citiesOfTurkey.citiesOfTurkeyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.dateOfApplicationDeadline}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.companyWebSiteDomain}</Table.Cell>
              <Table.Cell><Link to={`/jobadvertisements/${jobAdvertisement.id}`}>{jobAdvertisement.generalJobPosition.jobPositionName}</Link></Table.Cell>
              <Table.Cell>{jobAdvertisement.jobAdvertisementPublicationDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobDefiniton}</Table.Cell>
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
