document.getElementById('login-submit').addEventListener('click', function () {
    const nameField = document.getElementById('user-name');
    const userName = nameField.value;
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userName == 'sontan' && userEmail == 'sontan@gmail.com' && userPassword == 'secret') {
        console.log('valid user');
        window.location.href = 'banking.html';
    }
})