import React, { Fragment, Component } from "react";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./container";
import PropertyForm from "client/components/property-form";
import "./index.scss";
// import { Header } from "semantic-ui-react";
import Header from "client/components/header";


export class EditPropertyPage extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentWillMount() {
        this.props.getProperty(this.props.match.params.id);
    }

    render() {
        return (
            <Fragment>
                <Header />
                <PropertyForm proper/>
            </Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPropertyPage);