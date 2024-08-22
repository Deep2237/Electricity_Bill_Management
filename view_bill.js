document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll(".select-bill");
    const totalAmountElement = document.getElementById("total-amount");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateTotalAmount);
    });

    function updateTotalAmount() {
        let totalAmount = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                totalAmount += parseFloat(checkbox.dataset.amount);
            }
        });
        totalAmountElement.textContent = totalAmount.toFixed(2);
    }
});

function proceedToPay() {
     window.location.href = 'payment.html';
}

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.href = 'newuser.html';
    }
}
