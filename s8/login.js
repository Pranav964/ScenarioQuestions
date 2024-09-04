function validateForm() {
    let valid = true;
    const loadingSpinner = document.getElementById('loading-spinner');

    // Get the input elements and error message spans
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    // Clear previous error messages
    usernameError.innerText = '';
    passwordError.innerText = '';

    // Validate username
    if (username === '') {
        usernameError.innerText = 'Username is required.';
        valid = false;
    }

    // Validate password
    if (password === '') {
        passwordError.innerText = 'Password is required.';
        valid = false;
    } else if (password.length < 6) {
        passwordError.innerText = 'Password must be at least 6 characters long.';
        valid = false;
    } else if (!/\d/.test(password)) {
        passwordError.innerText = 'Password must contain at least one number.';
        valid = false;
    } else if (!/[a-zA-Z]/.test(password)) {
        passwordError.innerText = 'Password must contain at least one letter.';
        valid = false;
    } else if (/[^a-zA-Z0-9]/.test(password)) {
        passwordError.innerText = 'Password should not contain special characters.';
        valid = false;
    }

    if (valid) {
        loadingSpinner.style.display = 'block'; // Show spinner
        setTimeout(() => {
            loadingSpinner.style.display = 'none'; // Hide spinner after form submission
        }, 3000); // Simulate a delay
    }

    return valid;
}
