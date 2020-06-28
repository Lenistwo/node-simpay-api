import got from "got";

export class HttpService {
    sendJsonPost<T>(url :string, body :any) :Promise<T> {
        return got.post(url, {
            json: body
        }).json();
    }

    sendFormPost<T>(url :string, body :any) :Promise<T> {
        return got.post(url, {
            form: body
        }).json();
    }

    sendGet<T>(url: string) :Promise<T> {
        return got.get(url).json();
    }
}
