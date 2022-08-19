document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-total');
    const totalDeposit = newDepositAmount + previousDepositTotal;
    setTextElementValueById('deposit-total', totalDeposit);

    const previousBalance = getElementValueById('balance-total');
    const totalBalance = newDepositAmount + previousBalance;
    setTextElementValueById('balance-total', totalBalance);
});