import React from "react";
import GeneralJobPositions from "./GeneralJobPositions";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import { Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <GeneralJobPositions />
          </Grid.Column>
          <Grid.Column width={12}>
            <JobAdvertisementList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
