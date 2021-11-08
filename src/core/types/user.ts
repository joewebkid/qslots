export interface User {
    showPassword?: boolean;
    company_label?: string;
    company_id?: string;
    link: string;
    textMail: string;
    email: string;
    password: string;
    passwordShow: boolean;
    passwordRetry: string;
    passwordRetryShow: boolean;
    course_id: string;
    name: string;
    phone: string;
    code: string;
    id: string;
    account: string;
    desc: string;
    policy: boolean;
    secret_key: string;
    signature: string;
    sum_payment: string;
    test_system: object;
    test_subsystem: object;
    tests: string[];
    textData: string[];
}