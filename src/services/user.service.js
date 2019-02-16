export const userService = {
    send
};


function send(pair, amount, id) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({pair, amount, id})
    }
    return fetch(`/sellBtc`, requestOptions).then(handleResponse)
        .then(response => {
            const { user, rates } = response.text;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('rates', JSON.stringify(rates));
            return { user, rates};
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true); // eslint-disable-line no-restricted-globals
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}