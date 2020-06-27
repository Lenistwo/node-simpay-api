import {CodeVerifyRequest} from "../model/sms/requests/code.verify.request";
import {ServiceListRequest} from "../model/sms/requests/service.list.request";
import {ApiResponse} from "../model/generic/api.response";
import {CodeVerifyResponse} from "../model/sms/response/code.verify.response";
import {SmsServiceResponse} from "../model/sms/response/sms.service.response";

export class Sms {
    private VERIFY_CODE_URL: string = 'https://simpay.pl/api/status';
    private SERVICE_LIST_URL: string = 'https://simpay.pl/api/get_services';

    constructor(private apiKey: string,
                private  secret: string,
                private serviceId: string = '') {}

    verifyCode(request: CodeVerifyRequest): ApiResponse<CodeVerifyResponse> {
        if (!request.key) request.key = this.apiKey;
        if (!request.secret) request.secret = this.secret;
        if (!request.service_id) request.service_id = this.serviceId;

        return null;
    }

    getServiceList(request: ServiceListRequest): ApiResponse<SmsServiceResponse> {
        if (!request.key) request.key = this.apiKey;
        if (!request.secret) request.secret = this.secret;

        return null;
    }

}