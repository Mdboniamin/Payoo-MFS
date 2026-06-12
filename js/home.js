// add-money-js
document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const bank = document.getElementById('bank').value;
        const addAccountNumber = parseInt(document.getElementById('add-account-number').value);
        const addAmount = parseInt(document.getElementById('add-amount').value);
        const addPin = parseInt(document.getElementById('add-pin').value);

        if (addAccountNumber === 12345678910 && addPin === 1234) {
            const availableBalance = parseInt(document.getElementById('available-balance').innerText);

            document.getElementById('available-balance').innerText = availableBalance + addAmount;
        } else {
            alert('Please provide valid account number and pin');
        }
    })

// withdraw money js
document.getElementById('cash-out-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const cashoutAccountNumber = parseInt(document.getElementById('cashout-account-number').value);
        const cashoutAmount = parseInt(document.getElementById('cashout-amount').value);
        const cashoutPin = parseInt(document.getElementById('cashout-pin').value);

        if (cashoutAccountNumber === 12345678910 && cashoutPin === 1234) {
            const availableBalance = parseInt(document.getElementById('available-balance').innerText);

            document.getElementById('available-balance').innerText = availableBalance - cashoutAmount;
        } else {
            alert('Please provide valid account number and pin');
        }
    })

//toggling feature
document.getElementById('add-money-button')
    .addEventListener('click', function () {
        document.getElementById('add-money-parent').style.display = 'block';
        document.getElementById('cash-out-parent').style.display = 'none';
    })
document.getElementById('cash-out-button')
    .addEventListener('click', function () {
        document.getElementById('add-money-parent').style.display = 'none';
        document.getElementById('cash-out-parent').style.display = 'block';
    })