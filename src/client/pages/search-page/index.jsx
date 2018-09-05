import React from "react";
import "./index.scss";
import {Container, Grid, Segment} from "semantic-ui-react";

import Breadcrumbs from "client/components/breadcrumbs";
import SearchSummary from "client/components/search-summary";
import RankingBar from "client/components/ranking-bar";
import PropertyListItem from "client/components/property-list-item";
import {Pagination} from "client/components/pagination";
import BasicMapWidget from "client/components/basic-map-widget";
import Header from "client/components/header";
import {Breadcrumb} from "semantic-ui-react";
import QuickFilter from "client/components/quick-filter";
import {connect} from "react-redux";
import {mapStateToProps} from "./container";


class SearchPage extends React.Component {
    render() {
        return (
            <div className="mock">
                <Header showSearch={true}/>
                <div className="property-page__wrapper">
                    <div className="breadcrumb_wrapper">
                        <Segment>
                            <Breadcrumb
                                icon="right angle"
                                sections={[
                                    {key: "Home", content: "Home", href: "#"},
                                    {
                                        key: "Ukraine",
                                        content: "Ukraine",
                                        href: "#"
                                    },
                                    {key: "Lviv", content: "Lviv", href: "#"},
                                    {
                                        key: "DREAM Hostel Lviv",
                                        content: "DREAM Hostel Lviv",
                                        href: "#"
                                    }
                                ]}
                            />
                        </Segment>
                    </div>

                    <Container
                        text
                        className="property-page__wrapper-left_side"
                    >
                        <QuickFilter/>
                        <div
                            style={{
                                marginTop: "4%"
                            }}
                        >
                            <BasicMapWidget
                                key="BasicMapWidget"
                                latitude={49.837089}
                                longitude={24.021161}
                                rounded
                                centered
                            />
                        </div>
                    </Container>
                    <Container
                        text
                        className="property-page__wrapper-right_side"
                    >
                        <SearchSummary/>
                        <RankingBar key="RankingBar"/>
                        <PropertyListItem
                            key="PropertyListItem"
                            id="foundProperty1"
                        />

                       <div className="search-page__pagination">
                        <Pagination pagesCount={10}/>
                       </div>

                    </Container>

            </div>
            </div>

        );
    }
}

export default connect(mapStateToProps)(SearchPage);
