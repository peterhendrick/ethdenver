import {
    web3Constants
} from '../constants';

export function users(state = {}, action) {
    switch (action.type) {
        case web3Constants.BALANCEOF_REQUEST:
            return {
                loading: true
            };
        case web3Constants.BALANCEOF_SUCCESS:
            return {
                address: action.balance
            };
        case web3Constants.BALANCEOF_FAILURE:
            return {
                error: action.error
            };
        case web3Constants.OWNEROF_REQUEST:
            return {
                loading: true
            };
        case web3Constants.OWNEROF_SUCCESS:
            return {
                address: action.ownerAddress
            };
        case web3Constants.OWNEROF_FAILURE:
            return {
                error: action.error
            };
        case web3Constants.TOKENURI_REQUEST:
            return {
                loading: true
            };
        case web3Constants.TOKENURI_SUCCESS:
            return {
                address: action.certId
            };
        case web3Constants.TOKENURI_FAILURE:
            return {
                error: action.error
            };
        case web3Constants.MINT_REQUEST:
            return {
                loading: true
            };
        case web3Constants.MINT_SUCCESS:
            return {
                address: action.certId
            };
        case web3Constants.MINT_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}