// function to get value
function getValue(id){
    return document.getElementById(id).value;
}

//function to get value and convert to int
function getValueInt(id){
    return parseInt(document.getElementById(id).value);
}

//function to get inner text
function getInnerTextVal(id){
    return parseInt(document.getElementById(id).innerText);
}

//function to set inner text
function setInnerTextVal(val){
    document.getElementById('available-balance').innerText = val;
}

//function to toggle
function hideElementExcept(name){
    const forms = document.getElementsByClassName('form');
        for(const form of forms){
            form.style.display = 'none';
        }
        document.getElementById(name).style.display = 'block';
}

// add-money-js
document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const bank = getValue('bank');
        console.log(bank);
        const addAccountNumber = getValueInt('add-account-number');
        const addAmount = getValueInt('add-amount');
        const addPin = getValueInt('add-pin');

        if (addAccountNumber === 12345678910 && addPin === 1234) {
            const availableBalance = getInnerTextVal('available-balance');
            setInnerTextVal(availableBalance + addAmount);
        } else {
            alert('Please provide valid account number and pin');
        }
    })

// withdraw money js
document.getElementById('cash-out-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const cashoutAccountNumber = getValueInt('cashout-account-number');
        const cashoutAmount = getValueInt('cashout-amount');
        const cashoutPin = getValueInt('cashout-pin');
        if (cashoutAccountNumber === 12345678910 && cashoutPin === 1234) {
            const availableBalance = getInnerTextVal('available-balance');
            setInnerTextVal(availableBalance - cashoutAmount);
        } else {
            alert('Please provide valid account number and pin');
        }
    })
// transfer money js
document.getElementById('send-now-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const transferMoneyAccountNumber = getValueInt('transfer-money-account-number');
        const transferMoneyAmount = getValueInt('transfer-money-amount');
        const transferMoneyPin = getValueInt('transfer-money-pin');
        if (transferMoneyAccountNumber === 12345678910 && transferMoneyPin === 1234) {
            const availableBalance = getInnerTextVal('available-balance');
            setInnerTextVal(availableBalance - transferMoneyAmount);
        } else {
            alert('Please provide valid account number and pin');
        }
    })
// get bonus js
document.getElementById('get-bonus-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const couponNumber = getValue('bonus-coupon');
        if (couponNumber === 'newyear') {
            const availableBalance = getInnerTextVal('available-balance');
            setInnerTextVal(availableBalance + 5000);
        } else {
            alert('Please provide valid coupon');
        }
    })
// // withdraw money js
// document.getElementById('cash-out-btn')
//     .addEventListener('click', function (e) {
//         e.preventDefault();
//         const cashoutAccountNumber = getValueInt('cashout-account-number');
//         const cashoutAmount = getValueInt('cashout-amount');
//         const cashoutPin = getValueInt('cashout-pin');
//         if (cashoutAccountNumber === 12345678910 && cashoutPin === 1234) {
//             const availableBalance = getInnerTextVal('available-balance');
//             setInnerTextVal(availableBalance - cashoutAmount);
//         } else {
//             alert('Please provide valid account number and pin');
//         }
//     })

//toggling feature
document.getElementById('add-money-button')
    .addEventListener('click', function () {
        hideElementExcept('add-money-parent');
    })
document.getElementById('cash-out-button')
    .addEventListener('click', function () {
        hideElementExcept('cash-out-parent');
    })
document.getElementById('transfer-money-button')
    .addEventListener('click', function () {
        hideElementExcept('transfer-money-parent');
    })
document.getElementById('get-bonus-button')
    .addEventListener('click', function () {
        hideElementExcept('get-bonus-parent');
    })
// document.getElementById('cash-out-button')
//     .addEventListener('click', function () {
//         hideElementExcept('cash-out-parent');
//     })
// document.getElementById('cash-out-button')
//     .addEventListener('click', function () {
//         hideElementExcept('cash-out-parent');
//     })