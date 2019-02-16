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
            .then((response) => {
                dispatch(success(response));
                dispatch(alertActions.success(`Success`));
            }).catch(error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.message));
            });
    };

    function request(id) { return { type: userConstants.SEND_REQUEST, id } }
    function success(address, cert) { return { type: userConstants.SEND_SUCCESS, address, cert } }
    function failure(message) { return { type: userConstants.SEND_FAILURE, message } }
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