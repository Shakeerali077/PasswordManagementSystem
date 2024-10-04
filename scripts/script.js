// Toggle password visibility
document.getElementById("toggle-password").addEventListener("click", () => {
    const passwordField = document.getElementById("password"); // Get the password input field
    // Toggle the input type between "password" and "text"
    passwordField.type = passwordField.type === "password" ? "text" : "password"; // Show or hide password
});

// Redirect for "Forgot Password" link
document.getElementById("forgot-password").addEventListener("click", () => {
    window.location.href = "/pages/forgot-password.html"; // Redirect to the Forgot Password page
});

// Check and update the login button color when both fields are filled
const updateButtonState = () => {
    const userID = document.getElementById("user-id").value; // Get the User ID value
    const password = document.getElementById("password").value; // Get the Password value
    const loginBtn = document.getElementById("login-btn"); // Get the login button

    // If both User ID and Password are not empty, activate the button
    if (userID && password) {
        loginBtn.classList.add("active"); // Add the "active" class to enable the button
    } else {
        loginBtn.classList.remove("active"); // Remove the "active" class to disable the button
    }
};

// Listen for input events on both the User ID and Password fields
document.querySelectorAll(".input-field").forEach(input => {
    input.addEventListener("input", updateButtonState); // Update button state whenever input is detected
});

// Handle login button click
document.getElementById("login-btn").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default form submission

    const userID = document.getElementById("user-id").value; // Get User ID value
    const password = document.getElementById("password").value; // Get Password value
    const errorMessage = document.getElementById("error-message"); // Get the error message container

    // Remove the "error" class from all input groups (reset error state)
    document.querySelectorAll(".input-group").forEach(inputGroup => {
        inputGroup.classList.remove("error"); // Reset error styling
    });

    // Perform basic validation checks (if fields are empty)
    if (!userID || !password) {
        errorMessage.textContent = "Please fill in all fields."; // Display error message if any field is empty

        // Highlight the empty fields with an error style
        if (!userID) document.getElementById("user-id-group").classList.add("error"); // Add error class to the User ID field
        if (!password) document.getElementById("password-group").classList.add("error"); // Add error class to the Password field
        return; // Stop the function here if validation fails
    }

    // Logic to handle form submission or API call for login
    // You can add form validation or make an AJAX call for login here

    // Redirect to the set-new-password page or dashboard after successful login
    window.location.href = "/pages/set-new-password.html"; // Change this to the page you want to redirect to after login
});
