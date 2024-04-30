
import { PartnerList } from '@/app/dashboard/manage/cash/partner_list/table';
import dayjs from 'dayjs';
export const ListCashPartner = [
    {
        id:'pine102',
        nickname:'pine102',
        phone_number:'1213123213213',
        bank_name:'광주은행',
        account_number:'1231323213',
        account_holder:'pine102',
        Nickname:'광주가상',
        amount_before_application:0,
        processing_amount:0,
        amount_after_processing:0,
        points_before_deposit:0,
        points:0,
        points_after_deposit:0,
        number_of_applications_today:1,
        application_date: dayjs().subtract(2, 'hours').toDate(),
        processing_date: dayjs().subtract(2, 'hours').toDate(),
        explanation:'',
        shortcuts:['머니', '베팅'],
        situation:'Administrator payment',
    },
    {
        id:'pine105',
        nickname:'pine102',
        phone_number:'1213123213213',
        bank_name:'광주은행',
        account_number:'1231323213',
        account_holder:'pine102',
        Nickname:'광주가상',
        amount_before_application:0,
        processing_amount:-1110,
        amount_after_processing:0,
        points_before_deposit:0,
        points:0,
        points_after_deposit:0,
        number_of_applications_today:1,
        application_date: dayjs().subtract(2, 'hours').toDate(),
        processing_date: dayjs().subtract(2, 'hours').toDate(),
        explanation:'',
        shortcuts:['머니', '베팅'],
        situation:'Administrator recovery',
    },
    {
        id:'pine106',
        nickname:'pine102',
        phone_number:'1213123213213',
        bank_name:'광주은행',
        account_number:'1231323213',
        account_holder:'pine102',
        Nickname:'광주가상',
        amount_before_application:0,
        processing_amount:-1110,
        amount_after_processing:0,
        points_before_deposit:0,
        points:0,
        points_after_deposit:0,
        number_of_applications_today:1,
        application_date: dayjs().subtract(2, 'hours').toDate(),
        processing_date: dayjs().subtract(2, 'hours').toDate(),
        explanation:'',
        shortcuts:['머니', '베팅'],
        situation:'Withdrawal completed',
    },
    {
        id:'pine107',
        nickname:'pine102',
        phone_number:'1213123213213',
        bank_name:'광주은행',
        account_number:'1231323213',
        account_holder:'pine102',
        Nickname:'광주가상',
        amount_before_application:0,
        processing_amount:-1110,
        amount_after_processing:0,
        points_before_deposit:0,
        points:0,
        points_after_deposit:0,
        number_of_applications_today:1,
        application_date: dayjs().subtract(2, 'hours').toDate(),
        processing_date: dayjs().subtract(2, 'hours').toDate(),
        explanation:'',
        shortcuts:['머니', '베팅'],
        situation:'Deposit approved',
    },
  ]satisfies PartnerList[];
  