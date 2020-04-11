import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

 class EventForm extends Component {
     state={
         title: '',
         date : '',
         city : '',
         venue: '',
         hostedBy :''
     };

     handleDataChange = evt => {
         this.setState({
            [evt.target.name] : evt.target.value
         })
     };

     handleSubmit = evt =>{
         evt.preventDefault();
         this.props.newEvent(this.state);
     };

    render() {
        const {cancelForm} = this.props;
        const {title,date,city,venue,hostedBy} = this.state;
        return (
                  <Segment>
                    <Form onSubmit={this.handleSubmit} autoComplete='off'>
                      <Form.Field>
                        <label>Event Title</label>
                        <input value={title} name='title' onChange={this.handleDataChange} placeholder="Event Title"  />
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input value={date} name='date' onChange={this.handleDataChange} type="date" placeholder="Event Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input value={city} name='city' onChange={this.handleDataChange} placeholder="City event is taking place" />
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input value={venue} name='venue' onChange={this.handleDataChange} placeholder="Enter the Venue of the event" />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input value={hostedBy} name='hostedBy' onChange={this.handleDataChange} placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button type="button" onClick={cancelForm}>Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

export default EventForm