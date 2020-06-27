import {DbGenerateRequest} from "../model/db/requests/db.generate.request";
import {ApiResponse} from "../model/generic/api.response";
import {DbTransaction} from "../model/db/db.transaction";
import {DbTransactionRequest} from "../model/db/requests/db.transaction.request";
import {DbServicesListRequest} from "../model/db/requests/db.services.list.request";
import {DbServicesListResponse} from "../model/db/response/db.services.list.response";
import {DbTransactionLimit} from "../model/db/db.transaction.limit";
import {DbTransactionLimitsRequest} from "../model/db/requests/db.transaction.limits.request";
import {DbServiceCommissionRequest} from "../model/db/requests/db.service.commission.request";
import {DbCommission} from "../model/db/db.commission";
import {Hashing} from "../utils/hashing";

export class DirectBilling {
    private API_URL: string = "https://simpay.pl/db/api";
    private TRANSACTION_STATUS_URL: string = "https://simpay.pl/api/db_status";
    private SERVICES_LIST_URL: string = "https://simpay.pl/api/get_services_db";
    private TRANSACTION_LIMITS_URL: string = "https://simpay.pl/api/db_hosts";
    private SERVICE_COMMISSION_URL: string = "https://simpay.pl/api/db_hosts_commission";
    private GET_IP_URL: string = "https://simpay.pl/api/get_ip";

    constructor(private apiKey: string,
                private secret: string,
                private debugMode: boolean = false,
                private serviceId: string = '') {
    }

    // https://docs.simpay.pl/#generowanie-transakcji
    generateTransaction(request: DbGenerateRequest): ApiResponse<DbGenerateRequest> {
        if (!request.serviceId) request.serviceId = this.serviceId;
        let amount: string = '';

        if (request.amount) amount = request.amount;
        if (request.amount_gross) amount = request.amount_gross;
        if (request.amount_required) amount = request.amount_required;

        return null;
    }

    // https://docs.simpay.pl/#pobieranie-danych-o-transakcji
    getTransaction(request: DbTransactionRequest): ApiResponse<DbTransaction> {
        if (!request.key) request.key = this.apiKey;
        if (!request.secret) request.secret = this.secret;

        return null;
    }

    // https://docs.simpay.pl/#pobieranie-listy-uslug-dcb
    getServices(request: DbServicesListRequest): ApiResponse<DbServicesListResponse> {
        if (!request.key) request.key = this.apiKey;
        if (!request.secret) request.secret = this.secret;

        return null;
    }

    // https://docs.simpay.pl/#pobieranie-maksymalnych-kwot-transakcji
    getTransactionLimits(request: DbTransactionLimitsRequest): ApiResponse<DbTransactionLimit[]> {
        if (!request.key) request.key = this.apiKey;
        if (!request.secret) request.secret = this.secret;
        if (!request.service_id) request.service_id = this.serviceId;

        return null;
    }

    // https://docs.simpay.pl/#pobieranie-prowizji-dla-uslugi
    getServiceCommission(request: DbServiceCommissionRequest): ApiResponse<DbCommission[]> {
        if (!request.key) request.key = this.apiKey;
        if (!request.secret) request.secret = this.secret;
        if (!request.service_id) request.service_id = this.serviceId;

        return null;
    }

    // https://docs.simpay.pl/#lista-ip-serwerow-simpay
    getServersIp(): string[] {

        return null;
    }

    // https://docs.simpay.pl/#odbieranie-transakcji
    sing(id: number, status: string, valuenet: string, valuepartner: string, control: string): string {
        return Hashing.sha256(`${id + status + valuenet + valuepartner + control + this.apiKey}`);
    }
}
