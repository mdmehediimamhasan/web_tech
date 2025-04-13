document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form elements
    const formElements = {
        fullname: document.getElementById('fullname'),
        email: document.getElementById('email'),
        password: document.getElementById('password'),
        confirmpassword: document.getElementById('confirmpassword'),
        location: document.getElementById('location'),
        zipcode: document.getElementById('zipcode'),
        terms: document.getElementById('terms')
    };

    // Validate Full Name
    if (!formElements.fullname.value.trim()) {
        alert("Error: Full Name field is required.");
        formElements.fullname.focus();
        return;
    }
    if (/\d/.test(formElements.fullname.value)) {
        alert("Error: Full Name cannot contain numeric values.");
        formElements.fullname.focus();
        return;
    }

    // Validate Email
    const emailRegex = /^\d{2}-\d{5}-\d@student\.aiub\.edu$/;
    if (!formElements.email.value.trim()) {
        alert("Error: Email field is required.");
        formElements.email.focus();
        return;
    }
    if (!emailRegex.test(formElements.email.value)) {
        alert("Error: Invalid email format. Use: XX-XXXXXX-X@student.aiub.edu (AIUB Student mail format).");
        formElements.email.focus();
        return;
    }

    // Validate Password
    const password = formElements.password.value;
    if (!password.trim()) {
        alert("Error: Password field is required.");
        formElements.password.focus();
        return;
    }
    if (password.length < 8) {
        alert("Error: Password must be at least 8 characters long.");
        formElements.password.focus();
        return;
    }
    if (!/[A-Z]/.test(password)) {
        alert("Error: Password must contain at least one uppercase letter.");
        formElements.password.focus();
        return;
    }
    if (!/\d/.test(password)) {
        alert("Error: Password must contain at least one number.");
        formElements.password.focus();
        return;
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        alert("Error: Password must contain at least one special character.");
        formElements.password.focus();
        return;
    }

    // Validate Confirm Password
    if (formElements.password.value !== formElements.confirmpassword.value) {
        alert("Error: Passwords do not match.");
        formElements.confirmpassword.focus();
        return;
    }

    // Validate Location
    if (!formElements.location.value.trim()) {
        alert("Error: Location field is required.");
        formElements.location.focus();
        return;
    }

    // Validate Zip Code
    if (!formElements.zipcode.value.trim()) {
        alert("Error: Zip Code field is required.");
        formElements.zipcode.focus();
        return;
    }
    if (!/^\d+$/.test(formElements.zipcode.value)) {
        alert("Error: Zip Code must contain only numeric values.");
        formElements.zipcode.focus();
        return;
    }

    // Validate Terms
    if (!formElements.terms.checked) {
        alert("Error: You must agree to the terms and conditions.");
        formElements.terms.focus();
        return;
    }

    // If all validations pass
    alert("Success: Registration completed successfully!");
    this.reset();
});