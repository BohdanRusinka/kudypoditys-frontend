import React, { Component, Fragment } from "react";
import Header from "client/components/header";
import AvailabilityCalendar from "client/components/property-availability-calendar";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import "./index.scss";
import history from "client/history";
import ModalByUrl from "client/components/modal-by-url";
import BannerList from "client/components/banner-list";
export class HomePage extends Component {
    render() {
        return (
            <div className="main--wraper">
                <Header showSearch={true} />

                <ModalByUrl
                    openBy={history.location.search === "?verified"}
                    cancelTo={""}
                    submitTo={"/login"}
                    cancelText={"Not now"}
                    submitText={"Login"}
                    heading={"Thank You! Your email is verified."}
                    content={"Now you can login."}
                />

                <BannerList />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
