import type { RowsUser }  from './table'

export const rowsData:RowsUser[] = [];
for (let i = 1; i <= 1000; i++) {
  const userData = {
    id: `${i}`,
    site: `Site ${i}`,
    root_distributor: `Root Distributor ${i}`,
    top_distributor: `Top Distributor ${i}`,
    nickname: `User ${i}`,
    color_nickname: i % 2 === 0 ? 'blue' : 'red', // Alternating color
    level: `level_${i % 3 + 1}`, // Alternating levels
    account_holder: `Account Holder ${i}`,
    situation: i % 2 === 0 ? 'Active' : 'Inactive', // Alternating situation
    entry_exit: i % 2 === 0 ? 'Entry' : 'Exit', // Alternating entry/exit
    amount_held: i * 100,
    poin: i * 50,
    deposit: i * 200,
    withdraw: i * 100,
    entry_Exit: i * 20,
    losing_coupon: i * 5,
    betting_status: i % 2 === 0 ? 'Active' : 'Inactive', // Alternating status
    latest_deposit_date: new Date(`2024-04-${i < 10 ? '0' + i : i}`),
    date_of_subscription: new Date(`2023-01-${i < 10 ? '0' + i : i}`),
    withdrawal_date: new Date(`2024-04-${i < 10 ? '0' + i : i}`),
  };

  rowsData.push(userData);
}
