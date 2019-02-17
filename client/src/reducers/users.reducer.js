import {
    userConstants
} from '../constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.SEND_REQUEST:
            return {
                loading: true
            };
        case userConstants.SEND_SUCCESS:
            return {
                address: action.address,
                cert: action.cert
            };
        case userConstants.SEND_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}