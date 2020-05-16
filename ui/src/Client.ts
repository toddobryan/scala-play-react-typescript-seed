
const Client = {
    getSummary,
};
export default Client;

type Summary = {content: string};

async function getSummary() : Promise<Summary> {
    const response = checkStatus(await fetch("/api/summary"));
    return await parseJson<Summary>(response);
}

class PlayError extends Error {
    status?: string;
    response?: Response;
}

function checkStatus(response: Response): Response {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new PlayError(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
}

function parseJson<T>(response: Response): Promise<T> {
    return response.json()
        .then((json) => json as T);
}