const REQUEST_OPTIONS_GET =  {
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'GET',
    mode: 'cors',
};

const REQUEST_OPTIONS_POST =  {
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'POST',
    mode: 'cors',
};


const REQUEST_OPTIONS_DELETE =  {
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'DELETE',
    mode: 'cors',
};


const makeRequest = (requestOptions) => (url, body) => {
    if (body) {
        requestOptions = Object.assign({}, requestOptions, { body: JSON.stringify(body) });
    }

    return fetch(url, requestOptions)
        .then((response) => {
                if (response.status !== 200) {
                    console.log(`Error -> Status Code: ${response.status}`);
                    return;
                }

                return response;
            }
        )
        .catch((err) => {
            console.log('Fetch Error', err);
        });
};

const del = makeRequest(REQUEST_OPTIONS_DELETE);

const get = makeRequest(REQUEST_OPTIONS_GET);

const post = makeRequest(REQUEST_OPTIONS_POST);

export { get, post, del };
