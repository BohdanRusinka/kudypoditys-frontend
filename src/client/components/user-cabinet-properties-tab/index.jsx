import React, { Fragment } from "react";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from "react-redux";
import {
    Button,
    Icon,
    Image,
    Item,
    Label,
    Card,
    Header,
    Message,
    Segment
} from "semantic-ui-react";
import "./index.scss";
import { PropertyItem } from "./propertyItem";
import history from "client/history";
import { PropertyPage } from "./property-page";

export class ReviewsTab extends React.Component {
    addPropertyClicked = () => {
        history.push("/add-property");
    };

    viewProperty = property => {
        this.props.chooseProperty(property);
    };
    backToAllProperties = () => {
        this.props.unchooseProperty();
    };

    getPropertyItems = properties => {
        return properties.map((property, index) => {
            return (
                <PropertyItem
                    {...property}
                    key={index}
                    property={property}
                    viewProperty={() => this.viewProperty(property)}
                />
            );
        });
    };

    componentWillMount() {
        this.props.fetchUserInfo({ id: this.props.user.id });
    }

    render() {
        const { properties, activeProperty } = this.props;
        return (
            <Segment className="property-segment">
                {activeProperty ? (
                    <PropertyPage
                        property={activeProperty}
                        backToAllProperties={this.backToAllProperties}
                    />
                ) : (
                    <Segment>
                        <Header as="h2">Your properties</Header>
                        <Message info>
                            This is a list of your properties.
                        </Message>
                        {/* <Button
                            style={{ marginTop: "1%" }}
                            floated="right"
                            onClick={this.addPropertyClicked}
                            primary
                        >
                            Add property
                        </Button> */}
                        {properties ? (
                            !properties.length ? (
                                <Fragment>
                                    <div style={{ textAlign: "center" }}>
                                        <Header>
                                            You do not have properties.
                                        </Header>
                                        {/* <Button
                                            content="Add property"
                                            primary
                                            onClick={this.addPropertyClicked}
                                        /> */}
                                    </div>
                                </Fragment>
                            ) : (
                                this.getPropertyItems(properties)
                            )
                        ) : (
                            <Fragment>
                                <div style={{ textAlign: "center" }}>
                                    <Header>You do not have properties.</Header>
                                </div>
                            </Fragment>
                        )}
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            <Button
                                content="Add property"
                                primary
                                onClick={this.addPropertyClicked}
                            />
                        </div>
                    </Segment>
                )}
            </Segment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewsTab);
