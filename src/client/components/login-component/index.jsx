import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Form, Header, Grid, Segment, Message } from 'semantic-ui-react';

export class LoginComponent extends React.Component {

    handleForgotClicked = () => {
        this.props.forgotClicked();
    }

    handleLoginClicked = () => {
        this.props.loginClicked();
    }

    handleRegisterClicked = () => {
        this.props.registrationClicked();
    }

    render() {
        const listItems = this.props.errors.map((error, i) =>
            <li key={i}>{error.message}</li>
        );
        const emailError = (this.props.errors.find((item) => item.field === 'email'));
        const passwordError = (this.props.errors.find((item) => item.field === 'password'));
        return (
            <div className="loginComponent" >
                <Grid centered columns={3} >
                    <Grid.Column textAlign='center' style={{ marginTop: "13%" }}>
                        <Header as='h1'>Log-in to your account</Header>
                        <Form >
                            <Segment stacked secondary>
                                <Form.Field className={emailError ? 'error' : ''}>
                                    <Input
                                        iconPosition='left'
                                        icon='mail'
                                        type="text"
                                        name="email"
                                        value={this.props.email}
                                        placeholder="E-mail address"
                                        onChange={this.props.mailChanged}
                                    />
                                </Form.Field>
                                <Form.Field className={passwordError ? 'error' : ''}>
                                    <Input
                                        iconPosition='left'
                                        icon='lock'
                                        type="password"
                                        name="password"
                                        value={this.props.password}
                                        placeholder="Password"
                                        onChange={this.props.passwordChanged}
                                    />
                                </Form.Field>
                                <Form.Field style={{ textAlign: 'right' }}>
                                    <a tabIndex="0" onClick={this.handleForgotClicked}>Forgot the password ?</a>
                                </Form.Field>
                                <Button.Group>
                                    <Button positive onClick={this.handleLoginClicked}>Login</Button>
                                    <Button.Or />
                                    <Button primary onClick={this.handleRegisterClicked}>Register</Button>
                                </Button.Group>
                            </Segment>
                        </Form>
                        {this.props.errors.length ?
                            <Message negative style={{ textAlign: 'left' }}>
                                <p>{listItems}</p>
                            </Message> : ''
                        }
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

LoginComponent.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    errors: PropTypes.arrayOf(PropTypes.shape({ field: PropTypes.string.isRequired, message: PropTypes.string.isRequired }).isRequired).isRequired
};