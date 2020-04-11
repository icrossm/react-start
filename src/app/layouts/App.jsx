import React,{Component,Fragment} from 'react';
import { Button, Container } from 'semantic-ui-react';
import EventDashboard from '../../features/Event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';

class App extends Component {
  render(){
    return (
      <Fragment>
        <NavBar/>
        <Container className="main">
       <EventDashboard/>
        </Container>
      </Fragment>
    );
  }
}

export default App;
