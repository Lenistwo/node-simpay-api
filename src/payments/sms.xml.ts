import {HttpService} from "../utils/http.service";

export class SmsXml extends HttpService {
    private GET_IP_URL: string = "https://simpay.pl/api/get_ip";
    private charset: string = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";

    constructor(private apiKey: string) {
        super();
    }
}
