/*global google*/
import React, { Component } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { reduxForm, Field } from "redux-form";
import {
  combineValidators,
  composeValidators,
  isRequired,
  hasLengthGreaterThan,
} from "revalidate";
import { updateEvent, createEvent } from "../eventActions";
import cuid from "cuid";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";
import PlaceInput from "../../../app/common/form/PlaceInput";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter((e) => e.id === eventId)[0];
  }

  return {
    initialValues: event,
  };
};

const actions = {
  updateEvent,
  createEvent,
};

const validate = combineValidators({
  title: isRequired({ message: "Tittle is requiered" }),
  category: isRequired({ message: "category is requiered" }),
  description: composeValidators(
    isRequired({ message: "category is requiered" }),
    hasLengthGreaterThan(4)({ message: "Min 4 character" })
  )(),
  city: isRequired({ message: "city is requiered" }),
  venue: isRequired({ message: "venue is requiered" }),
});

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" },
];
class EventForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {},
  };
  onSubmit = (values) => {
    values.venueLatLng = this.state.venueLatLng;
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvet = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: "assets/user.png",
      };
      this.props.createEvent(newEvet);
      this.props.history.push(`/events/${newEvet.id}`);
    }
  };

  handleCitySelect = (selectedCity) => {
    geocodeByAddress(selectedCity)
      .then((result) => getLatLng(result[0]))
      .then((latlng) => {
        this.setState({
          cityLtLng: latlng,
        });
      })
      .then(() => {
        this.props.change("city", selectedCity);
      });
  };
  handleVenueSelect = (selectedVenue) => {
    geocodeByAddress(selectedVenue)
      .then((result) => getLatLng(result[0]))
      .then((latlng) => {
        this.setState({
          venueLatLng: latlng,
        });
      })
      .then(() => {
        this.props.change("venue", selectedVenue);
      });
  };

  render() {
    const {
      history,
      initialValues,
      invalid,
      submitting,
      pristine,
    } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              autoComplete="off"
            >
              <Field name="title" placeholder="Title" component={TextInput} />
              <Field
                name="category"
                placeholder="Category"
                component={SelectInput}
                options={category}
              />
              <Field
                name="description"
                placeholder="Description"
                component={TextArea}
                rows={3}
              />
              <Header sub color="teal" content="Event Location" />
              <Field
                name="city"
                placeholder="City"
                component={PlaceInput}
                options={{ types: ["(cities)"] }}
                onSelect={this.handleCitySelect}
              />
              <Field
                name="venue"
                placeholder="Venue"
                component={PlaceInput}
                options={{
                  location: new google.maps.LatLng(this.state.cityLatLng),
                  radius: 1000,
                  types: ["establishment"],
                }}
                onSelect={this.handleVenueSelect}
              />
              <Field
                name="date"
                placeholder="Date"
                component={DateInput}
                dateFormat="dd LLL yyy h:mm a"
                showTimeSelect
                timeFormat="HH:mm"
              />

              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button
                type="button"
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push("/events")
                }
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(reduxForm({ form: "eventForm", validate })(EventForm));
