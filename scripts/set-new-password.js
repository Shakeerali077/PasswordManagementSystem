// Toggle password visibility
document.querySelectorAll(".eye-icon").forEach(icon => {
    // Add click event listener to each eye icon
    icon.addEventListener("click", () => {
        // Toggle the input type between 'password' and 'text'
        const inputField = icon.previousElementSibling; // Get the associated password input field
        inputField.type = inputField.type === "password" ? "text" : "password"; // Switch type
    });
});

// Function to check and update button color when input fields are filled
const updateButtonState = () => {
    // Get values from the password input fields
    const oldPassword = document.getElementById("old-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const loginBtn = document.getElementById("login-btn"); // Get the login button

    // If all fields are filled, add the 'active' class to enable the button
    if (oldPassword && newPassword && confirmPassword) {
        loginBtn.classList.add("active");
    } else {
        loginBtn.classList.remove("active"); // Otherwise, remove the class
    }
};

// Add input event listeners to input fields
document.querySelectorAll(".input-field").forEach(input => {
    input.addEventListener("input", updateButtonState); // Update button state on input
});

// Handles the set new password button click event
document.getElementById("login-btn").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default form submission

    // Retrieve password values from input fields
    const oldPassword = document.getElementById("old-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message"); // Get the error message display

    // Clear previous error messages and reset border styles
    errorMessage.textContent = "";
    document.querySelectorAll(".input-group").forEach(inputGroup => {
        inputGroup.classList.remove("error"); // Remove error styles
    });

    // Basic validation checks
    if (!oldPassword || !newPassword || !confirmPassword) {
        errorMessage.textContent = "Please fill in all fields."; // Set error message
        // Highlight input fields that are missing data
        if (!oldPassword) document.getElementById("old-password-group").classList.add("error");
        if (!newPassword) document.getElementById("new-password-group").classList.add("error");
        if (!confirmPassword) document.getElementById("confirm-password-group").classList.add("error");
        return; // Exit the function
    }

    // Check if new password matches confirm password
    if (newPassword !== confirmPassword) {
        errorMessage.textContent = "The passwords do not match"; // Set error message
        // Highlight new password and confirm password input fields
        document.getElementById("new-password-group").classList.add("error");
        document.getElementById("confirm-password-group").classList.add("error");
        return; // Exit the function
    }

    // Check if the new password is the same as the old password
    if (newPassword === oldPassword) {
        errorMessage.textContent = "New password cannot be the same as the old password."; // Set error message
        // Highlight old password and new password input fields
        document.getElementById("old-password-group").classList.add("error");
        document.getElementById("new-password-group").classList.add("error");
        return; // Exit the function
    }

    // If password is successfully changed, display success message
    document.getElementById("login-form").style.display = "none"; // Hide the login form
    document.getElementById("success-container").classList.add("active"); // Show success container

    // Add logic here to set the new password, e.g., making an API call
});

// Handles the login button click on the success page
document.getElementById("login-btn-success").addEventListener("click", () => {
    // Redirect to the login page (or handle login logic)
    window.location.href = "/index.html"; // Change to your actual login URL
});
