"use strict"
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passInput = document.getElementById('password');
let registerBtn = document.getElementById('SBtn');
let users = JSON.parse(localStorage.getItem('users')) || []; 


function validateInputs(name, email, pass) {
    
    if (name.trim() === '') {
        alert('Name is required');
        return false;
    }

    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    if (pass.trim() === '') {
        alert('Password is required');
        return false;
    }
    if (pass.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }

    return true;
}

function signIn() {
    let name = nameInput.value;
    let email = emailInput.value;
    let pass = passInput.value;

    
    if (!validateInputs(name, email, pass)) {
        return;  
    }

    
    let user = {
        name: name,
        email: email,
        pass: pass,
    };

    
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            alert('User with this email already exists');
            return;
        }
    }

    
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));  

    clear();  
    console.log(user);  
}

function clear() {
    nameInput.value = '';
    emailInput.value = '';
    passInput.value = '';
}

registerBtn.addEventListener('click', function() {
    signIn();
});






