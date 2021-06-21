import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import './Dashboard.css';
import Navi from "./Navi";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import BaseUserList from "../pages/BaseUserList";
import CitiesOfTurkeyList from "../pages/CitiesOfTurkeyList";
import GeneralJobPositions from "./GeneralJobPositions";
import GeneralJobPositionList from "../pages/GeneralJobPositionList";
import EmployerList from "../pages/EmployerList";
import JobSeekerList from "../pages/JobSeekerList";
import SystemEmployeeList from "../pages/SystemEmployeeList";
import CartDetail from "../pages/CartDetail";
import JobAdvertisementCreate from "../pages/JobAdvertisementCreate";


export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Navi/>
      <Container className="main">
      <Grid stackable>
          <Grid.Column width={4}>
            <GeneralJobPositions />
          </Grid.Column>
          <Grid.Column width={12}>
          <Route exact path="/" component={JobAdvertisementList} />
          <Route exact path="/jobadvertisementlist" component={JobAdvertisementList} />
          <Route path="/jobadvertisements/:id" component={JobAdvertisementDetail} />
          <Route path="/jobadvertisementcrate" component={JobAdvertisementCreate} />
          <Route path="/cart" component={CartDetail} />
          <Route exact path="/baseuserlist" component={BaseUserList} />
          <Route exact path="/employerlist" component={EmployerList} />
          <Route exact path="/citieofturkeylist" component={CitiesOfTurkeyList} />
          <Route exact path="/generaljobpositionlist" component={GeneralJobPositionList} />
          <Route exact path="/jobseekerlist" component={JobSeekerList} />
          <Route exact path="/systememployeelist" component={SystemEmployeeList} />
          </Grid.Column>
      </Grid>
      </Container>
    </div>
  );
}
