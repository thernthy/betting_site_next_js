import type { RowsUser } from './table';

export const rowsData: RowsUser[] = [];
for (let i = 1; i <= 1000; i++) {
  const userData: RowsUser = {
    id: `${i}`,
    site: `Site ${i}`,
    root_distributor: `Root Distributor ${i}`,
    top_distributor: `Top Distributor ${i}`,
    nickname: `User ${i}`,
    color_nickname: i % 2 === 0 ? 'blue' : 'red', // Alternating color
    level: `level_${i % 3 + 1}`, // Alternating levels
    account_holder: `Account Holder ${i}`,
    amount_held: i * 100,
    poin: i * 50,
    start_date_and_time: new Date(`2023-01-${i < 10 ? '0' + i : i}`),
    due_date: new Date(`2023-12-${i < 10 ? '0' + i : i}`),
    payment_date_and_time: new Date(`2024-04-${i < 10 ? '0' + i : i}`),
    payback_appied: ['lo', 'cs', 'vsl'],
    payment_formula: `Formula ${i}`,
    bet_amount: i * 10,
    winnings: i * 20,
    deposit: i * 200,
    withdraw: i * 100,
    point_conversion_fee: i * 5,
    money_held: i * 150,
    payback_person: i * 25,
    payback_point: i * 15,
    payment_method: `Method ${i}`,
    sittuation: i % 2 === 0 ? 'watting' : 'Inactive', // Alternating situation
    registation_itme: new Date(`2022-12-${i < 10 ? '0' + i : i}`),
    processing_time: new Date(`2024-04-${i < 10 ? '0' + i : i}`),
  };

  rowsData.push(userData);
}

console.log(rowsData);
