import React from "react";
import "./index.scss";
import { Icon, Table } from "semantic-ui-react";
import QuantityPicker from "client/components/quantity-picker";
import _ from "lodash";
import {
    convertCurrencyByName,
    titleToCode
} from "client/helpers/convertCurrency";
import Modal from "client/components/modal";
import BookingForm from "client/components/booking-form";
import connect from "react-redux/es/connect/connect";
import { mapDispatchToProps, mapStateToProps } from "./container";
import { roomQuantityChanged } from '../../helpers/roomQuantityChanged';
import { getDaysDifference } from '../../helpers/date-helpers';

export const getIcons = number =>
    _.times(number, index => <Icon name="user" />);

export class RoomsTable extends React.Component {
    componentDidMount() {}

    componentDidUpdate() {
        // console.log("RoomsTable componentDidUpdate props = ");
        // console.log(this.props);
    }

    handleToggleCollapseDescription(roomId, ev) {
        ev.preventDefault();
        this.props.toggleRoomDescriptionCollapse(roomId);
    };

    getBedsSummary = bedsInRoom => {
        return (
            <div
                style={{
                    padding: "5px"
                }}
            >
                {bedsInRoom.map((bed, index) => {
                    return (
                        <span
                            key={index}
                            style={{
                                display: "block",
                                paddingLeft: "23px",
                                color: "#465672"
                            }}
                        >
                            {bed.count} {bed.bedType.name}
                        </span>
                    );
                })}
            </div>
        );
    };

    handleQuantitySelectionChanged = (e, value, roomId) => {
        const { rooms, selectRoomsAmount } = this.props;
        // this.props.selectRoomsAmount(roomId, roomsAmount, sortedRooms);
        roomQuantityChanged(rooms, value, roomId, selectRoomsAmount)
    };

    render() {
        if (!this.props || !this.props.rooms) return null;
        const {
            rooms,
            user,
            property,
            currency,
            checkIn,
            checkOut
        } = this.props;
        const { currency: propCurrency } = property;
        let bookButton = false;
        if (user) bookButton = true;

        const priceFunc = price =>
            convertCurrencyByName(propCurrency.code, price, currency.code);
        const currencySymbol = titleToCode.get(currency.code);
        const daysStaying = getDaysDifference(checkIn, checkOut);
        let roomRow = null;
        if (this.props.rooms.length > 0) {
            roomRow = this.props.rooms.map(room => {
                const bedsToSleep = room.bedInRooms.reduce(
                    (acc, el) => acc + el.count,
                    0
                );
                let priceForOneDay = priceFunc(room.price);
                let totalPrice = (priceForOneDay * daysStaying).toFixed(1);
                const totalCheck = (totalPrice * room.selectedAmount).toFixed(1);

                return (
                    <Table.Row>
                        <Table.Cell>
                            <div>
                                <div className="room-type">
                                    <p
                                        style={{
                                            margin: "0",
                                            color: "#465672",
                                            fontSize: "18px"
                                        }}
                                    >
                                        {/*<Icon name="bed"/>*/}
                                        Room: {room.roomType.name}
                                    </p>
                                </div>
                                <div className="room-area">
                                    <strong> Area: </strong> {room.area} square
                                    meters
                                </div>
                                <div className="room-beds">
                                    <strong> Beds: </strong> <br />
                                    {this.getBedsSummary(room.bedInRooms)}
                                </div>
                                <div>
                                    <strong> Description: </strong>
                                    <p className='room-description' >
                                        {room.description &&
                                        room.description.length > 50 &&
                                        room.descriptionCollapsed
                                            ? room.description.slice(0, 50)
                                            : room.description}
                                        <a href=''
                                           onClick={this.handleToggleCollapseDescription.bind(this, room.id)}>
                                            ...
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </Table.Cell>
                        <Table.Cell> {getIcons(bedsToSleep)} </Table.Cell>
                        <Table.Cell>
                            {totalPrice} {currencySymbol}
                        </Table.Cell>
                        <Table.Cell>
                            <QuantityPicker
                                roomId={room.id}
                                roomsSelectedAmount={room.selectedAmount}
                                roomsAvailable={room.amount + 1}
                                onSelectionChanged={
                                    this.handleQuantitySelectionChanged
                                }
                            />
                        </Table.Cell>
                        <Table.Cell>
                            {bookButton ? (
                                <Modal
                                    trigger={
                                        <div>
                                            <div className="room-total-check">
                                                {totalCheck} {currencySymbol}
                                            </div>
                                            <div
                                                className="book-btn"
                                                style={{
                                                    height: "30px",
                                                    width: "100px",
                                                    // paddingLeft: "10px",
                                                    margin: "0"
                                                }}
                                            >
                                                {/*TODO: Use there Semantic button*/}
                                                <button
                                                    style={{
                                                        height: "100%"
                                                    }}
                                                    onClick={() => {
                                                        this.props.setRoom(
                                                            room.id
                                                        );
                                                    }}
                                                >
                                                    Book now
                                                </button>
                                            </div>
                                        </div>
                                    }
                                    onClose={this.props.clearBookingForm}
                                    closeIcon
                                >
                                {/* todo: insert (pass) params - rooms Amount */}
                                    <BookingForm
                                        rooms={rooms}
                                        paymentTypes={property.paymentTypes}
                                    />
                                </Modal>
                            ) : null}
                        </Table.Cell>
                    </Table.Row>
                );
            });
        } else {
            roomRow = (
                <div> There are not any available rooms in the property </div>
            );
        }

        return (
            <Table celled compact definition>
                <Table.Header fullWidth>
                    <Table.Row>
                        <Table.HeaderCell width={10} textAlign="center">
                            Accommodation Type
                        </Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center">
                            Sleeps
                        </Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center">
                            Total Price
                        </Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center">
                            Quantity
                        </Table.HeaderCell>
                        <Table.HeaderCell width={3} textAlign="center">
                            Actions
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body> {roomRow} </Table.Body>
            </Table>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomsTable);
