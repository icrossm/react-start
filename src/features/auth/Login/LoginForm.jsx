import React from 'react';
import {login} from '../authActions'
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { connect } from 'react-redux';

const actions ={
  login
}

const LoginForm = ({login,handleSubmit}) => {
  return (
    <Form error size="large" autoComplete='off' onSubmit={handleSubmit(login)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(null,actions)(reduxForm( {form: 'loginForm'})(LoginForm));