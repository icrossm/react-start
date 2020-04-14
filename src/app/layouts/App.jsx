import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/Event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Route, Switch, withRouter } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";
import EventDetailed from "../../features/Event/EventDetailed/EventDetailed";
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
                <Switch key = {this.props.location.key}>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDetailed} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailed} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route
                    path={["/createEvent", "/manage/:id"]}
                    component={EventForm}
                  />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
