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
                private serviceId: string = '') {}
}
