
import React, { Component,Fragment} from "react";
import { Header, Container, Grid, Rail,Button, Sticky, Segment } from 'semantic-ui-react';
import CheckboxBedForm from './bedForm';
import CheckboxAmenitiesForm from './checkboxAmenitiesForm';
import ButtonTab from './buttonForm';
import { reduxForm, } from 'redux-form';



class AmenitiesTabRegistration extends Component {
    state = {}
    handleContextRef = contextRef => this.setState({ contextRef })
    render() {
    const { handleSubmit, pristine, submitting } = this.props
        const { contextRef } = this.state
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Container >
                        <Header />
                        <Header as='h2'>Amenities</Header>
                        You're almost done! We just need a few more details about the extra bed options you provide,
                         plus any amenities or specific features and services available.
                     </Container>
                     <Fragment onSubmit={handleSubmit} >
                    < CheckboxBedForm />
                    <Header as='h3'>Amenities</Header>
                    Tell us about your amenities
                    <CheckboxAmenitiesForm />
                    <Button basic >Show all amenities </Button>
                    <ButtonTab />
                    <Button color='teal' style={{ width: '750px' }}
                disabled={pristine || submitting} >Continue</Button>
        </Fragment>
                    <Rail position='right' style={{ marginTop: '120px' }}>
                        <Sticky context={contextRef}>
                            <Segment secondary >
                                After you complete registration you'll be able to
                                 make changes to your listing before it goes live
                             </Segment>
                        </Sticky>
                    </Rail>
                </Grid.Column>
            </Grid>
        );
    }
}
AmenitiesTabRegistration = reduxForm({
    form: "AmenitiesTabRegistration"
})(AmenitiesTabRegistration);
export default  AmenitiesTabRegistration;