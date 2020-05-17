
const Client = {
    getTimeFromPlay,
};
export default Client;

type TimeJson = {content: string};

async function getTimeFromPlay() : Promise<TimeJson> {
    const response = checkStatus(await fetch("/api/time"));
    return await parseJson<TimeJson>(response);
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