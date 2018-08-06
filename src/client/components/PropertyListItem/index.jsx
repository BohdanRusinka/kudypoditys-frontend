import React from 'react';
import { Card, Image, Button, CardContent, Grid, CardMeta, CardDescription, Container, Icon, Header, Label } from 'semantic-ui-react';
import './index.scss';
import PropTypes from 'prop-types';

class PropertyListItem extends React.Component {

    handleRedirectToMap = id => {
        //todo  add redirection to map
    }
    handleAddToComparison = id => {
        // todo sdd to comparision
    }
    handleAddToFavorites = id => {
        // todo add to favorites
    }
    handleRedirectToDetails = id => {
        //todo add redirection to property page
    }
    render() {
        const {propertyItemData}=this.props
        return (
            <Card fluid
                style={{
                    margin: "0.5rem",
                    padding: "0.5rem",
                    border: "groove"
                }}>
                <CardContent>
                    <Grid>
                        <Grid.Column width={3}>
                            <Image
                                rounded
                                src={propertyItemData.image}
                                floated="left" />
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <Header as='h3'
                                style={{ marginTop: "1.5rem" }}
                                color='blue'
                                onClick={this.handleRedirectToDetails}        >
                                <Icon
                                    size='mini'
                                    color='black'
                                    name='heart'
                                    onClick={this.handleAddToFavorites}
                                />
                                <Icon
                                    size='tiny'
                                    color='black'
                                    name='balance scale'
                                    onClick={this.handleAddToComparison}
                                />
                                <Header.Content>{propertyItemData.name}</Header.Content>
                            </Header>
                            <CardMeta
                                style={{
                                    marginTop: "0.5rem"
                                }}>
                                <Container className="qqq">
                                    <Icon
                                        name='map marker'
                                        size='large'
                                        onClick={this.handleRedirectToMap} />
                                    <a href=''>{propertyItemData.location} Show on map</a>  {propertyItemData.distanceToCenter} km to center
                                    </Container>
                            </CardMeta>
                            <CardDescription
                                textAlign='left'
                                floated="right"
                                style={{
                                    marginTop: "0.5rem"
                                }}>
                                {propertyItemData.description}
                            </CardDescription>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Grid columns={2}>
                                <Grid.Column >
                                    <Container textAlign='right'>
                                        <span className="ratingName"> Superb</span><br />
                                        {propertyItemData.reviewsNamber} reviews
                                    </Container>
                                </Grid.Column>
                                <Grid.Column>
                                    <Label size='big' color='blue'>
                                        {propertyItemData.rating}</Label>
                                </Grid.Column>
                            </Grid>
                            <Grid columns={1}>
                                <Grid.Column>
                                    <Header as='h5'
                                        color='blue'
                                        textAlign="right" >
                                        <Header.Content
                                            style={{
                                                marginRight: "2.5rem",
                                            }}>location {propertyItemData.locationRating}</Header.Content>
                                    </Header>
                                    <Container floated='right'
                                        textAlign='right'
                                        style={{
                                            marginTop: "5rem"
                                        }}>
                                        <span
                                            className="priceInfo">prise from {propertyItemData.priceFrom} to {propertyItemData.priceTo} {propertyItemData.curency}</span>
                                        <Button primary
                                            floated='right'
                                            style={{
                                                marginTop: "0.5rem"
                                            }}
                                            onClick={this.handleRedirectToDetails}
                                        >Choose room
                                        </Button>
                                    </Container>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}
PropertyListItem.propTypes = {
    propertyItemData: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        distanceToCenter: PropTypes.number.isRequired,
        priceTo: PropTypes.number.isRequired,
        priceFrom: PropTypes.number.isRequired,
        curency: PropTypes.string.isRequired,
        reviewsNamber: PropTypes.number.isRequired,
        locationRating: PropTypes.number.isRequired
    })
};

export default PropertyListItem;



