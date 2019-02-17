import {
    web3Constants
} from '../constants';

export function web3(state = {}, action) {
    switch (action.type) {
        case web3Constants.BALANCEOF_REQUEST:
            return {
                ...state,
                loading: true
            };
        case web3Constants.BALANCEOF_SUCCESS:
            return {
                ...state,
                address: action.balance
            };
        case web3Constants.BALANCEOF_FAILURE:
            return {
                error: action.error
            };
        case web3Constants.OWNEROF_REQUEST:
            return {
                ...state,
                loading: true
            };
        case web3Constants.OWNEROF_SUCCESS:
            return {
                ...state,
                address: action.address
            };
        case web3Constants.OWNEROF_FAILURE:
            return {
                error: action.error
            };
        case web3Constants.TOKENURI_REQUEST:
            return {
                ...state,
                loading: true
            };
        case web3Constants.TOKENURI_SUCCESS:
            return {
                ...state,
                certificate: action.certificate
            };
        case web3Constants.TOKENURI_FAILURE:
            return {
                error: action.error
            };
        case web3Constants.MINT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case web3Constants.MINT_SUCCESS:
            return {
                ...state,
                address: action.certId
            };
        case web3Constants.MINT_FAILURE:
            return {
                error: action.error
            };
        default:
            return {
                ...state
            }
    }
}