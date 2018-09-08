import { call, put, takeLatest, all } from 'redux-saga/effects';
import { reset } from 'redux-form';
import propertyService from 'client/services/propertyService';
import * as actionTypes from './actionTypes';

function* createProperty(action) {
    try {
        yield call(propertyService.createProperty, action.payload);
        yield put({
            type: actionTypes.CREATE_PROPERTY_SUCCESS
        });
        yield put(reset('propertyRegistrationForm'));
    }
    catch (error) {
        yield put({
            type: actionTypes.CREATE_PROPERTY_FAILED,
            payload: error.message
        });
    }
}

export default function* propertySaga() {
    yield all([
        takeLatest(actionTypes.CREATE_PROPERTY, createProperty)
    ])
}
