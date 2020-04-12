import React, { Component, Fragment } from "react";
import { Button, Container } from "semantic-ui-react";
import EventDashboard from "../../features/Event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Route } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";
import { EventDetailed } from "../../features/Event/EventDetailed/EventDetailed";
import { PeopleDashboard } from "../../features/user/PeopleDashboard/PeopleDashboard";
import { SettingsDashboard } from "../../features/user/Settings/SettingsDashboard";
import { UserDetailed } from "../../features/user/UserDetailed/UserDetailed";
import EventForm from "../../features/Event/EventForm/EventForm";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Route path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailed} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailed} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
