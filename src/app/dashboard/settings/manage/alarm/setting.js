const names = `
회원가입
회원입금
회원출금
회원문의	
총판입금
총판출금
총판문의
롤링전환
총판정산
관심회원 베팅
스포츠 환급	
`.trim().split("\n");

const methods = `
join the membership
Member deposit
Member withdrawal
Member inquiry
Total sales deposit
Total sales withdrawal	
Distributor inquiry
rolling transition
Total judgment settlement
Interested Member Betting
sports refund	
`.trim().split("\n");

export const SettingData  = [];

names.map((name, index) => (
    SettingData.push({
        id: index + 1,
        name: name.trim(),
        method: methods[index].toLowerCase().replace(/\s/g, "_")
      })
));


