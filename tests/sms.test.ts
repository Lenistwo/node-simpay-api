import { expect } from 'chai';

import {Sms} from "../src/payments/sms";

const sms = new Sms("XXX", "XXXX", "XXXX");

describe('Sms class methods', () => {
    it('verifyCode', () => {
        const request = {
            number: "7055",
            code: "4C5ZFE",
            service_id: "3487"
        };

        sms.verifyCode(request).then(res => {
            expect(res).to.equals({});
        });
    });
});

const testVerifyCode = () => {
    const request = {
        number: "7055",
        code: "4C5ZFE",
        service_id: "3487"
    };

    sms.verifyCode(request).then(res => {
        console.log(res);
    });
}

const testGetServiceList = () => {
    sms.getServiceList({}).then(res => {
        console.log(res);
    });
}
