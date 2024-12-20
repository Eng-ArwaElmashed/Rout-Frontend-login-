let LemailInput = document.getElementById('Lemail');
let LpassInput = document.getElementById('Lpassword');
let loginBtn = document.getElementById('LogBtn');

function LogIn() {
    let Luser = {
        email: LemailInput.value,
        pass: LpassInput.value,
    };

    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    let loginSuccessful = false;

    for (let i = 0; i < storedUsers.length; i++) {
        if (storedUsers[i].email === Luser.email && storedUsers[i].pass === Luser.pass) {
            localStorage.setItem('userName', storedUsers[i].name);
            window.location.href = '../home.html';  
            loginSuccessful = true;  
            break; 
        }
    }

    if (!loginSuccessful) {
        alert('Incorrect email or password');
    }
}

loginBtn.addEventListener('click', function() {
    LogIn();
});
