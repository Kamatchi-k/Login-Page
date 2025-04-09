document.addEventListener("DOMContentLoaded", () => {
    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const signInNotification = document.getElementById("successNotification");
    const signUpNotification = document.getElementById("signupSuccessNotification");

    // Clear all inputs on page load
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach(input => input.value = "");

    // Toggle between Sign In and Sign Up
    showSignup.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    });

    showLogin.addEventListener("click", (e) => {
        e.preventDefault();
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    // Sign In Logic
    const signInButton = loginForm.querySelector("button");
    signInButton.addEventListener("click", (e) => {
        e.preventDefault();
        showNotification(signInNotification);
        clearInputs(loginForm);
    });

    // Sign Up Logic
    const signUpButton = signupForm.querySelector("button");
    signUpButton.addEventListener("click", (e) => {
        e.preventDefault();
        showNotification(signUpNotification);
        clearInputs(signupForm);
    });

    // Show Notification
    function showNotification(notificationElement) {
        notificationElement.classList.remove("hidden");
        notificationElement.classList.add("show");

        setTimeout(() => {
            notificationElement.classList.remove("show");
            setTimeout(() => {
                notificationElement.classList.add("hidden");
            }, 400);
        }, 3000);
    }

    // Clear Inputs
    function clearInputs(formElement) {
        const inputs = formElement.querySelectorAll("input");
        inputs.forEach(input => input.value = "");
    }
});
