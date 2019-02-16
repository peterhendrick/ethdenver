import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
// import { history } from '../helpers';

export const userActions = {
    send
};



function send(address, cert) {
    return dispatch => {
        dispatch(request(address, cert));

        userService.send(address, cert)
            .then(({ user, rates}) => {
                dispatch(success(user, rates));
                dispatch(alertActions.success(`Trade successful, you sold ${amount} BTC for ${pair}.`));
            }).catch(error => {
                dispatch(failure(id, error.toString()));
                dispatch(alertActions.error(error));
            });
    };

    function request(id) { return { type: userConstants.SEND_REQUEST, id } }
    function success(address, cert) { return { type: userConstants.SEND_SUCCESS, address, cert } }
    function failure(id, error) { return { type: userConstants.SEND_FAILURE, id, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}