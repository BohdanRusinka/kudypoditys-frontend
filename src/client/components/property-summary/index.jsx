import React from 'react';
import './index.scss';
import {Header, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';


export class PropertySummary extends React.Component {

    handleRedirectToMap = () => {
        console.log(this.props.propertyItemData.location);

    };



    render() {
        const {propertyItemData} = this.props;
        console.log(propertyItemData);

        return (
            <div className="property-summary__container">
                <Header
                    as="h1"
                    style={{fontSize: 23, padding: 10, lineHeight: 1.2}}
                >
                    {propertyItemData.name}
                </Header>

                <div className="location__container">
                <Header
                    as="h2"
                    style={{fontSize: 16, padding: 10, lineHeight: 1.2}}
                >
                    <Icon
                        style={{cursor: "pointer"}}
                        name="map outline"
                        onClick={this.handleRedirectToMap}
                    />
                    {propertyItemData.location}
                </Header>





                </div>
            </div>
        )
    }


}


PropertySummary.propTypes = {
    propertyItemData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
    })
};




