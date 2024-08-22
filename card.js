document.getElementById('make-payment').addEventListener('click', function() {
    window.location.href = 'payment_success.html';
});

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.href = 'newuser.html';
    }
}
