import axios from 'axios'

const Request = (requestMethod, requestURL, data) => {

    let method = requestMethod || 'get';
    
    return axios({
        method: method,
        url: requestURL,
        data: data
    });
}

export default Request;