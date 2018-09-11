import React, {Component} from "react";
import {Card, Icon, Image} from "semantic-ui-react";
import PropTypes from "prop-types";
import history from 'client/history';
export class MapPropertyItem extends Component {
    nameClicked = () => {
        history.push(`/property/${this.props.propertyId}`)
    };

    render() {


        return (
            <Card
                style={{
                    minWidth: "100px",
                    margin: "3%"
                }}
            >
                <Image centered src={this.props.imageSrc} size="medium"/>
                <Icon
                    style={{
                        position: "absolute",
                        right: "1%",
                        top: "1%",
                        textAlign: "right",
                        color: "white"
                    }}
                    name="close"
                    size="large"
                    onClick={this.props.closeClicked}
                />
                <Card.Content>
                    <Card.Header style={{textAlight: "center"}}>
                        <a tabIndex="0" onClick={this.nameClicked}>
                            {this.props.propertyName}
                        </a>
                    </Card.Header>
                    <Card.Meta>
                        <span className="address">
                            {this.props.propertyAddress}
                        </span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <a style={{float: "right"}}>
                        <Icon name="money"/>
                        {this.props.price}
                    </a>
                    <a style={{float: "left"}}>
                        <Icon name="star"/>
                        {this.props.rating}
                    </a>
                </Card.Content>
            </Card>
        );
    }
}

MapPropertyItem.propTypes = {
    imageSrc: PropTypes.string,
    propertyName: PropTypes.string,
    propertyAddress: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.string
};

export default MapPropertyItem;
