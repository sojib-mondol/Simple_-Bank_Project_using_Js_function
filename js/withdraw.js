document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withDrawAmount = getInputValueById('withdraw-field');
    const previousWithdraw = getElementValueById('withdraw-total');
    const totalWithdraw = withDrawAmount + previousWithdraw;
    setTextElementValueById('withdraw-total', totalWithdraw);

    const pervious_Balance = getElementValueById('balance-total');
    const new_Balance = pervious_Balance - withDrawAmount;
    setTextElementValueById('balance-total', new_Balance);

})