import defaultState from "client/logic/defaultState";
import { GET_CURRENT_USER_SUCCESS } from "../login/actionTypes";
import {
    CHOOSE_BOOKING,
    UNCHOOSE_BOOKING,
    GET_USER_BOOKINGS_SUCCESS,
    CANCEL_BOOKING_SUCCESS,
    GET_USER_REVIEWS_SUCCESS
} from "./actionTypes";
import { action } from "@storybook/react";

export default function userCabinetReducer(
    state = defaultState.userCabinet,
    action
) {
    switch (action.type) {
        case GET_CURRENT_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload
            };
        }

        case CHOOSE_BOOKING: {
            return {
                ...state,
                activeBooking: action.payload
            };
        }

        case UNCHOOSE_BOOKING: {
            return {
                ...state,
                activeBooking: null
            };
        }

        case GET_USER_BOOKINGS_SUCCESS: {
            return {
                ...state,
                bookings: action.payload
            };
        }

        case CANCEL_BOOKING_SUCCESS: {
            return {
                ...state,
                bookings: state.bookings.filter(
                    (booking, index) => booking.id !== action.payload.id
                ),
                activeBooking: null
            };
        }

        case GET_USER_REVIEWS_SUCCESS: {
            console.log("REDUCER", action);
            return {
                ...state,
                reviews: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
