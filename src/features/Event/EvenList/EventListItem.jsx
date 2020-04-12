import React, { Component, Fragment } from "react";
import { Icon, Segment, Item, Button, List } from "semantic-ui-react";
import EventListAtendee from "./EventListAtendee";
import { enGB } from "date-fns/esm/locale";

class EventListItem extends Component {
  render() {
    const { event, selectEvent ,deleteEvent} = this.props;
    return (
      <Fragment>
        <Segment.Group>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                <Item.Content>
                  <Item.Header as="a">{event.title}</Item.Header>
                  <Item.Description>
                    Hosted by <a>{event.hostedBy}</a>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
            <span>
              <Icon name="clock" /> {event.date} |
              <Icon name="marker" /> {event.venue}
            </span>
          </Segment>
          <Segment secondary>
            <List horizontal>
              {event.attendee && event.attendees.map((attendee) => (
                <EventListAtendee key={attendee.id} attendee={attendee}/>
              ))}
            </List>
          </Segment>
          <Segment clearing>
            <span>{event.description}</span>
            <Button onClick={()=>deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete"  />
            <Button onClick={()=>selectEvent(event)} as="a" color="teal" floated="right" content="View"  />
          </Segment>
        </Segment.Group>
      </Fragment>
    );
  }
}
export default EventListItem;
