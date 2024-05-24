const BASE_URL: string = '';

export const fetchAPi = async(url: string, method: string, payload?: any) => {
    try {
        const request = payload ? {method: method, body: JSON.stringify(payload)} : {method: method}
        const response = await fetch(`${BASE_URL + url}`, request);
        return await response.json();
    } catch (error) {
        return error;
    };
}; 