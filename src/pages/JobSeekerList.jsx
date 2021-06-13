import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";

export default function JobSeekerList() {
  const [jobSeekers, setjobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
        jobSeekerService
      .getJobSeekers()
      .then((result) => setjobSeekers(result.data.data));
  },[]);

  return (
    <div>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>İş Arayan No</Table.HeaderCell>
          <Table.HeaderCell>İş Arayan Adı</Table.HeaderCell>
          <Table.HeaderCell>İş Arayan Soyadı</Table.HeaderCell>
          <Table.HeaderCell>İş Arayan E-posta Adresi</Table.HeaderCell>
          <Table.HeaderCell>İş Arayan TC Kimlik No</Table.HeaderCell>
          <Table.HeaderCell>İş Arayan TC Kimlik No Doğrulandı mı?</Table.HeaderCell>
          <Table.HeaderCell>İş Arayan TC Kimlik No Doğrulanma Tarihi</Table.HeaderCell>
          <Table.HeaderCell>İş Arayan E-posta Adresi Doğrulandı mı?</Table.HeaderCell>
          <Table.HeaderCell>İş Arayan TC E-posta Adresi Doğrulanma Tarihi</Table.HeaderCell>
          <Table.HeaderCell>İş Arayan Fotoğraf Linki</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {jobSeekers.map((jobSeeker) => (
          <Table.Row key={jobSeeker.id}>
            <Table.Cell>{jobSeeker.id}</Table.Cell>
            <Table.Cell>{jobSeeker.firstName}</Table.Cell>
            <Table.Cell>{jobSeeker.lastName}</Table.Cell>
            <Table.Cell>{jobSeeker.baseUser?.emailAddress}</Table.Cell>
            <Table.Cell>{jobSeeker.nationalityId}</Table.Cell>
            {jobSeeker.isNationalityIdValidationPerformed ? (
              <Table.Cell>Evet</Table.Cell>
            ) : (
              <Table.Cell>Hayır</Table.Cell>
            )}
            <Table.Cell>{jobSeeker.nationalityIdValidationDate}</Table.Cell>
            {jobSeeker.isEmailValidationPerformed ? (
              <Table.Cell>Evet</Table.Cell>
            ) : (
              <Table.Cell>Hayır</Table.Cell>
            )}
            <Table.Cell>{jobSeeker.emailValidationDate}</Table.Cell>
            <Table.Cell>{jobSeeker.jobSeekerPhotoLink}</Table.Cell>

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