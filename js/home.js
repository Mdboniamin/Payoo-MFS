const transactionData = [];
// function to get value
function getValue(id) {
    return document.getElementById(id).value;
}

//function to get value and convert to int
function getValueInt(id) {
    return parseInt(document.getElementById(id).value);
}

//function to get inner text
function getInnerTextVal(id) {
    return parseInt(document.getElementById(id).innerText);
}

//function to set inner text
function setInnerTextVal(val) {
    document.getElementById('available-balance').innerText = val;
}

//function to toggle
function hideElementExcept(name) {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById(name).style.display = 'block';
}
//function to toggle style
function toggleStyle(name) {
    const formBtns = document.getElementsByClassName('form-btn');
    for (const btn of formBtns) {
        btn.classList.remove('active-btn');
        btn.classList.add('border-gray-300');
    }
    document.getElementById(name).classList.remove('border-gray-300');
    document.getElementById(name).classList.add('active-btn');
}

// add-money-js
document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const bank = getValue('bank');
        console.log(bank);
        const addAccountNumber = getValueInt('add-account-number');
        const addAmount = getValueInt('add-amount');
        if(addAmount <= 0){
            alert('invalid amount')
            return;
        }
        const addPin = getValueInt('add-pin');

        if (addAccountNumber === 12345678910 && addPin === 1234) {
            const availableBalance = getInnerTextVal('available-balance');
            setInnerTextVal(availableBalance + addAmount);
        } else {
            alert('Please provide valid account number and pin');
        }
        const data = {
            name: "Add Money",
            date: new Date().toLocaleTimeString()
        }
        transactionData.unshift(data);
    })

// withdraw money js
document.getElementById('cash-out-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const cashoutAccountNumber = getValueInt('cashout-account-number');
        const cashoutAmount = getValueInt('cashout-amount');
        const availableBalance = getInnerTextVal('available-balance');
        if(cashoutAmount > availableBalance || cashoutAmount <= 0){
            alert('sorry insufficient balance')
            return;
        }
        const cashoutPin = getValueInt('cashout-pin');
        if (cashoutAccountNumber === 12345678910 && cashoutPin === 1234) {
            
            setInnerTextVal(availableBalance - cashoutAmount);
        } else {
            alert('Please provide valid account number and pin');
        }
        const data = {
            name: "Withdraw Money",
            date: new Date().toLocaleTimeString()
        }
        transactionData.unshift(data);
    })
// transfer money js
document.getElementById('send-now-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const transferMoneyAccountNumber = getValueInt('transfer-money-account-number');
        const transferMoneyAmount = getValueInt('transfer-money-amount');
        const availableBalance = getInnerTextVal('available-balance');
        
        if(transferMoneyAmount > availableBalance || transferMoneyAmount){
            alert('sorry insufficient balance')
            return;
        }
        const transferMoneyPin = getValueInt('transfer-money-pin');
        if (transferMoneyAccountNumber === 12345678910 && transferMoneyPin === 1234) {
            
            setInnerTextVal(availableBalance - transferMoneyAmount);
        } else {
            alert('Please provide valid account number and pin');
        }
        const data = {
            name: "Transfer Money",
            date: new Date().toLocaleTimeString()
        }
        transactionData.unshift(data);
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
        const data = {
            name: "Get Bonus",
            date: new Date().toLocaleTimeString()
        }
        transactionData.unshift(data);
    })
// pay-bill-js
document.getElementById('pay-now-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const payBillbank = getValue('pay-bill-bank');
        const payBillAccountNumber = getValueInt('pay-bill-account-number');
        const payBillAmount = getValueInt('pay-bill-amount');
        const payBillPin = getValueInt('pay-bill-pin');
        const availableBalance = getInnerTextVal('available-balance');
        if(payBillAmount > availableBalance || payBillAmount <= 0){
            alert('sorry insufficient balance')
            return;
        }
        if (payBillAccountNumber === 12345678910 && payBillPin === 1234) {
            
            setInnerTextVal(availableBalance - payBillAmount);
        } else {
            alert('Please provide valid account number and pin');
        }
        const data = {
            name: "Pay Bill",
            date: new Date().toLocaleTimeString()
        }
        transactionData.unshift(data);
    })
//transaction section
document.getElementById('transaction-button')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const transactionContainer = document.getElementById('transaction-container')
        
        transactionContainer.innerText = '';

        for (const data of transactionData) {
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="bg-white rounded-2xl p-3 text-[#080808] opacity-70 flex justify-between items-center mb-3">
                <div class="flex items-center">
                    <div class="rounded-full p-4 bg-[#f4f5f7] mr-2">
                        <img src="assets/wallet1.png" alt="">
                    </div>
                    <div>
                        <p class="font-bold">${data.name}</p>
                        <p class="text-[12px]">${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis rotate-90"></i>
            </div>
            `
            transactionContainer.appendChild(div)
        }
    })

//toggling feature
document.getElementById('add-money-button')
    .addEventListener('click', function () {
        hideElementExcept('add-money-parent');
        toggleStyle('add-money-button');
    })
document.getElementById('cash-out-button')
    .addEventListener('click', function () {
        hideElementExcept('cash-out-parent');
        toggleStyle('cash-out-button');
    })
document.getElementById('transfer-money-button')
    .addEventListener('click', function () {
        hideElementExcept('transfer-money-parent');
        toggleStyle('transfer-money-button');
    })
document.getElementById('get-bonus-button')
    .addEventListener('click', function () {
        hideElementExcept('get-bonus-parent');
        toggleStyle('get-bonus-button');
    })
document.getElementById('pay-bill-button')
    .addEventListener('click', function () {
        hideElementExcept('pay-bill-parent');
        toggleStyle('pay-bill-button');
    })
document.getElementById('transaction-button')
    .addEventListener('click', function () {
        hideElementExcept('transaction-parent');
        toggleStyle('transaction-button');
    })