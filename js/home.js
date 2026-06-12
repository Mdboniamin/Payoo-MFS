document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const bank = document.getElementById('bank').value;
        const accountNumber = parseInt(document.getElementById('account-number').value);
        const addAmount = parseInt(document.getElementById('add-amount').value);
        const addPin = parseInt(document.getElementById('add-pin').value);

        if (accountNumber === 12345678910 && addPin === 1234) {
            const availableBalance = parseInt(document.getElementById('available-balance').innerText);

            document.getElementById('available-balance').innerText = availableBalance + addAmount;
        } else {
            alert('Please provide valid account number and pin');
        }
    })