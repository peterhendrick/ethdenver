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
                dispatch(failure(error.message.toString()));
                dispatch(alertActions.error(error.message.toString()));
            });
    };

    function request(id) { return { type: userConstants.SEND_REQUEST, id } }
    function success(address, cert) { return { type: userConstants.SEND_SUCCESS, address, cert } }
    function failure(message) { return { type: userConstants.SEND_FAILURE, message } }
}
