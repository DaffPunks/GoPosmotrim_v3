import axios, {CancelToken, isCancel} from 'axios';
import _get from 'lodash/get';

export class API {

    constructor(config = {}) {
        this._axios = axios.create(config);
    }

    request({url, method, params, data, query}) {
        return this._axios({
            method: method,
            url: `/api/${url}`,
            headers: {
                // 'Authorization': YC.csrfToken
            },
            data: {
                params,
                data,
                query,
            }
        })
            .then(response => response.data)
            .catch(error => {throw error});
    }
}

export default new API();
