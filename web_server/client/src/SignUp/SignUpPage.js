import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './SignUpForm';

class SignUpPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: '',
        confirm_password: ''
      }
    };
  }

  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    const email = this.state.user.email;
    const password = this.state.user.password;
    const confirm_password = this.state.user.confirm_password;

    console.log('email:', email);
    console.log('password:', password);
    console.log('confirm_assword:', confirm_password);

    if (password !== confirm_password) {
      return;
    }

    // post registration data
    const url = 'http://' + window.location.hostname + ':3000' + '/auth/signup';
    const request = new Request(url, {
      method: 'Post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      cache: 'no-store',
      body: JSON.stringify({
        email: this.state.user.email,
        password: this.state.user.password
      })
    });

    fetch(request).then(response => {
      if (response.status === 200) {
        this.setState({
          errors: {}
        });

        // change the current URL to /login
        this.context.router.replace('/login');
      } else {
        response.json().then(json => {
          console.log(json);
          const errors = json.errors ? json.errors : {};
          errors.summary = json.message;
          console.log(this.state.errors);
          this.setState({ errors });
        });
      }
    });
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });

    if (this.state.user.password !== this.state.user.confirm_password) {
      const errors = this.state.errors;
      errors.password = "Password and Confirm Password don't match.";
      this.setState({ errors });
    } else {
      const errors = this.state.errors;
      errors.password = '';
      this.setState({ errors });
    }
  }

  render() {
    return (
      <SignUpForm
        onSubmit={e => this.processForm(e)}
        onChange={e => this.changeUser(e)}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

// To make react-router work
SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;
