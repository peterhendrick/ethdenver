import { web3Constants } from '../constants';
import { web3Service } from '../services';
import { alertActions } from './';

export const web3Actions = {
    balanceOf,
    ownerOf,
    tokenURI,
    mint
};

function balanceOf(address) {
    return dispatch => {
        dispatch(request(address));

        web3Service.balanceOf(address)
            .then((response) => {
                dispatch(success(response));
                dispatch(alertActions.success(`Success`));
            }).catch(error => {
                dispatch(failure(error.message.toString()));
                dispatch(alertActions.error(error.message.toString()));
            });
    };

    function request(address) { return { type: web3Constants.BALANCEOF_REQUEST, address } }
    function success(address) { return { type: web3Constants.BALANCEOF_SUCCESS, address } }
    function failure(message) { return { type: web3Constants.BALANCEOF_FAILURE, message } }
}

function ownerOf(tokenId) {
    return dispatch => {
        dispatch(request(tokenId));

        web3Service.ownerOf(tokenId)
            .then((response) => {
                dispatch(success(response));
                dispatch(alertActions.success(`Success`));
            }).catch(error => {
                dispatch(failure(error.message.toString()));
                dispatch(alertActions.error(error.message.toString()));
            });
    };

    function request(tokenId) { return { type: web3Constants.OWNEROF_REQUEST, tokenId } }
    function success(address) { return { type: web3Constants.OWNEROF_SUCCESS, address } }
    function failure(message) { return { type: web3Constants.OWNEROF_FAILURE, message } }
}

function tokenURI(tokenId) {
    return dispatch => {
        dispatch(request(tokenId));

        web3Service.tokenURI(tokenId)
            .then((response) => {
                dispatch(success(response));
                dispatch(alertActions.success(`Success`));
            }).catch(error => {
                dispatch(failure(error.message.toString()));
                dispatch(alertActions.error(error.message.toString()));
            });
    };

    function request(tokenId) { return { type: web3Constants.TOKENURI_REQUEST, tokenId } }
    function success(certificate) { return { type: web3Constants.TOKENURI_SUCCESS, certificate } }
    function failure(message) { return { type: web3Constants.TOKENURI_FAILURE, message } }
}

function mint(addrss, tokenId, tokenUri) {
    return dispatch => {
        dispatch(request(tokenId));


        web3Service.mint(addrss, tokenId, tokenUri)
            .then((response) => {
                dispatch(success(response));
                dispatch(alertActions.success(`Success`));
            }).catch(error => {
                dispatch(failure(error.message.toString()));
                dispatch(alertActions.error(error.message.toString()));
            });
    };

    function request(tokenId) { return { type: web3Constants.TOKENURI_REQUEST, tokenId } }
    function success(tokenId) { return { type: web3Constants.TOKENURI_SUCCESS, tokenId } }
    function failure(message) { return { type: web3Constants.TOKENURI_FAILURE, message } }
}
