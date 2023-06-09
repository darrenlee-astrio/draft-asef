export function useApi() {
    const apiKeyHeader = 'X-Api-Key';
    const contentType = 'application/json';

    async function post(url, data, apiKey = null, additionalHeaders = null) {
        let headers = {
            'Content-Type': contentType,
            'Content-Length': data.length
        }

        if (apiKey) {
            headers[apiKeyHeader] = apiKey;
        }

        if (additionalHeaders) {
            headers = Object.assign({}, headers, additionalHeaders)
        }

        return await fetch(url, {
            method: 'post',
            body: data,
            headers: headers
        }).then(res => res.json());
    }

    async function get(url, apiKey = null, additionalHeaders = null) {
        let headers = {
            'Content-Type': contentType,
        }

        if (apiKey) {
            headers[apiKeyHeader] = apiKey;
        }

        if (additionalHeaders) {
            headers = Object.assign({}, headers, additionalHeaders)
        }

        return await fetch(url, {
            method: 'get',
            headers: headers
        }).then(res => res.json());
    }

    return {
        post,
        get
    }
}