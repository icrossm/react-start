import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EvenList/EventList";
import {connect} from 'react-redux';
import cuid from "cuid";
import {createEvent,updateEvent,deleteEvent} from '../eventActions';


const mapState = (state) =>({
  events : state.events
});

const actions =  {
  createEvent,
  updateEvent,
  deleteEvent
};


class EventDashboard extends Component {

  handleSelectEvent = (event)=>{
    this.setState({
      selectedEvent : event,
      isOpen : true
    })
  }


  handleDeleteEvent= (id) =>{
    this.props.deleteEvent(id);
  }

  render() {
    const {events} = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList 
              events={events} 
              deleteEvent = {this.handleDeleteEvent}/>
          </Grid.Column>
          <Grid.Column width={6}>
            <h2>activity</h2>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default connect(mapState,actions)(EventDashboard);
