import axios from "axios";

export default async function serviceHelper(
    url,
    method,
    body = {},
    headers = {
        "content-type": "application/json",
    }
) {
    try {
        url = `http://192.168.20.236:8080/api/${url}`;
        const config = {
            method,
            url,
            headers,
        };
        if (method === "post") {
            config["data"] = body;
        }
        const response = await axios(config);
        return response;
    } catch (err) {
        // if (err.response.data.errors.length > 0) {
        //     throw new Error(err.response.data.errors[0].msg);
        // } else {
        //     throw new Error(err.response.data.message);
        // }
        console.log('errorrrr', err.response.data)
        throw new Error( JSON.stringify(err.response.data.message))
    }
}