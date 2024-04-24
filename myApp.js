const payment_counting = ({total_buget, spanding_day}) => { 
    const buget = total_buget ? total_buget:350;
    const days = spanding_day ? spanding_day : 30;
    let Payment_coting_tiem = 0;
    while(days > 0) {
        const aday = 2;
        if(buget - aday === 0 || buget - aday < 0){
           break
        }

        Payment_coting_tiem ++;
    }


    return {Payment_coting_tiem}
}