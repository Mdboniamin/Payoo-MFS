// Loginbutton functionality

document.getElementById('login-button')
    .addEventListener('click', function (e) {
        e.preventDefault()
        const mobileNumber = 12345678910;
        const pinNumber = 1234;

        const mobileNumberValue = document.getElementById('mobile-number').value;
        const mobileNumberValConvert = parseInt (mobileNumberValue);

        const pinNumberValue = document.getElementById('pin-number').value;
        const pinNumberValConvert = parseInt(pinNumberValue);

      
        if(mobileNumberValConvert === 12345678910 && pinNumberValConvert === 1234){
            window.location.href = './home.html'
        } else{
            alert('Invalid Credentials');
        }

    })