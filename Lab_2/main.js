document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmpassword").value;

        const nameRegex = /^[A-Za-z\s]+$/;
if (fullname === "" || !/^[a-zA-Z\s]+$/.test(fullname)) {
    alert("Please enter a valid Full Name using letters only. Numbers and special characters are not allowed.");
    e.preventDefault();
    return;
}
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            e.preventDefault();
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            e.preventDefault();
            return;
        }
       /* if (fullname.length < 5 || fullname.length > 20) {
            alert("Full Name must be between 5 and 20 characters.");
            e.preventDefault();
            return;
        }*/
        if (!nameRegex.test(fullname)) {
            alert("Full Name can only contain letters and spaces.");
            e.preventDefault();
            return;
        }
        if (email === "") {
            alert("Email is required.");
            e.preventDefault();
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            e.preventDefault();
            return;
        }
        if (password === "") {
            alert("Password is required.");
            e.preventDefault();
            return;
        }
        if (confirmPassword === "") {
            alert("Please confirm your password.");
            e.preventDefault();
            return;
        }
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            e.preventDefault();
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            e.preventDefault();
            return;
        }
        if (password === confirmPassword) {
            alert("Registration successful!");
        } else {
            alert("Registration failed.");
        }
        e.preventDefault();
    });
});
