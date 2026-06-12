document.getElementById('withdraw-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const accountNumber = parseInt(document.getElementById('account-number').value);
        const cashoutAmount = parseInt(document.getElementById('cashout-amount').value);
        const cashoutPin = parseInt(document.getElementById('cashout-pin').value);

        if (accountNumber === 12345678910 && cashoutPin === 1234) {
            const availableBalance = parseInt(document.getElementById('available-balance').innerText);

            document.getElementById('available-balance').innerText = availableBalance - cashoutAmount;
        } else {
            alert('Please provide valid account number and pin');
        }
    })