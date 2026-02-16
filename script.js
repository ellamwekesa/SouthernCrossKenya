      showError("All fields are required!");
        return;
    }

    if (!validateEmail(email)) {
        showError("Please enter a valid email address!");
        return;
    }

    if (!validatePhone(phone)) {
        showError("Please enter a valid phone number!");
        return;
    }

    // Successful registration
    alert("Registration successful! Welcome, " + name + "!");
    form.reset();

function showError(message) {
    const errorDiv = document.getElementById("error-message");
    errorDiv.textContent = message;
    errorDiv.style.display ="notification";
}       
