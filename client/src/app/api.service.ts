const BASE_URL: string = 'api/v1';

export const fetchAPi = async(url: string, method: string, payload?: any) => {
    try {
        const response = await fetch(`${BASE_URL + url}`, {
            method: method,
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });
        return await response.json();
    } catch (error) {
        return error;
    };
}; 