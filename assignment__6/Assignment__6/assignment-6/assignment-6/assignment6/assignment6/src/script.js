
document.addEventListener("DOMContentLoaded", function () {
    var resetButton = document.querySelector('button[type="reset"]');
    resetButton.addEventListener("click", function () {
        clearErrors();
    });
});

function validateForm() {
    var errors = [];
    
    var productId = document.getElementById('productId').value;
    var productDescription = document.getElementById('productDescription').value;
    var price = document.getElementById('price').value;
    var supplierUsername = document.getElementById('supplierUsername').value;
    var supplierStatus = document.querySelectorAll('input[name="supplierStatus"]:checked').length;
    var supplierEmail = document.getElementById('supplierEmail').value;

    if (!/^[0-9]{8}$/.test(productId)) {
        errors.push("Product ID must be 8 digits long and contain only numbers.");
    }

    if (productDescription.length < 20) {
        errors.push("Product Description must be at least 20 characters long.");
    }

    if (!/^[1-9]\d{0,2}$/.test(price) || price <= 0 || price >= 1000) {
        errors.push("Price must be a whole number, greater than 0 and less than 1000.");
    }

    if (!/^[a-zA-Z][a-zA-Z0-9]{3,}$/.test(supplierUsername)) {
        errors.push("Supplier Username must start with an alphabet and have at least 4 characters.");
    }

    if (supplierStatus === 0) {
        errors.push("Please select at least one Supplier Status.");
    }

    if (!document.getElementById('signup').checkValidity()) {
        errors.push("Invalid Supplier Email.");
    }
    var errorPanel = document.getElementById('errorPanel');
    if (errors.length > 0) {
        errorPanel.innerHTML = '<p>' + errors.join('</p><p>') + '</p>';
        errorPanel.style.display = 'block'; 
        return false;
    } else {
        clearErrors();
        alert('Form submitted successfully!');
        return true;
    }
}

function clearErrors() {

    var errorPanel = document.getElementById('errorPanel');
    errorPanel.innerHTML = '';
    errorPanel.style.display = 'none';
}


