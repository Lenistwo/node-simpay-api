import {HttpService} from "../utils/http.service";
import {Hashing} from "../utils/hashing";

export class SmsXml extends HttpService {
    private static GET_IP_URL: string = "https://simpay.pl/api/get_ip";
    private static charset: string = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
    private static params = [ "send_number", "sms_text", "sms_from", "sms_id", "sign" ];
    private static codes :any = {
        "7055": 0.25,
        "7136": 0.5,
        "7255": 1.0,
        "7355": 1.5,
        "7455": 2.0,
        "7555": 2.5,
        "7636": 3.0,
        "77464": 3.5,
        "78464": 4.0,
        "7936": 4.5,
        "91055": 5.0,
        "91155": 5.5,
        "91455": 7.0,
        "91664": 8.0,
        "91955": 9.5,
        "92055": 10.0,
        "92555": 12.5
    }

    constructor(private apiKey: string) {
        super();
    }

    // https://docs.simpay.pl/#odbieranie-informacji-o-sms
    checkParameters(map :any) :boolean {
        for (let param of SmsXml.params) {
            if (!map[param]) return false;
        }

        return map['sign'] === this.sign(map);
    }

    // https://docs.simpay.pl/#odbieranie-informacji-o-sms
    generateCode() :string {
        let result :string = "";

        for (let i = 0; i < 6; i++) {
            SmsXml.charset.charAt(this.random(0, SmsXml.charset.length))
        }

        return result;
    }

    // https://docs.simpay.pl/#odbieranie-informacji-o-sms
    getSmsValue(number :string) :number {
        return SmsXml.codes[number];
    }

    // https://docs.simpay.pl/#odbieranie-informacji-o-sms
    generateXml(text :string) {
        return `<?xml version=\"1.0\" encoding=\"UTF-8\"?><sms-response>${text.normalize('NFKD')}<sms-text></sms-text></sms-response>`;
    }

    private sign(map: any) {
        return Hashing.sha256(`${map['sms_id']}${map['sms_text']}${map['sms_from']}${map['send_number']}${map['send_time']}${this.apiKey}`);
    }

    random(min :number, max :number) {
        return Math.random() * (max - min) + min;
    }
}
