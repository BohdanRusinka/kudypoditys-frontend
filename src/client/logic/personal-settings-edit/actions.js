import {
    USER_SETTINGS_UPDATE,
    USER_SETTINGS_SEND,
    UPLOAD_USER_AVATAR,
    USER_PASSWORD_RESET
} from "./actionTypes";

export function updateUserSettings(payload) {
    return {
        type: USER_SETTINGS_UPDATE,
        payload
    };
}

export function sendUserSettings(payload) {
    return {
        type: USER_SETTINGS_SEND,
        payload
    };
}

export function uploadAvatar(payload) {
    return {
        type: UPLOAD_USER_AVATAR,
        payload
    };
}

export function resetPassword(payload) {
    return {
        type: USER_PASSWORD_RESET,
        payload
    };
}