
document.getElementById('instructions-button').addEventListener('click', function() {
    alert('Detailed payment instructions will be shown here.');
});


document.getElementById('pay-now').addEventListener('click', function() {
     window.location.href = 'card.html';
});

document.getElementById('back-home').addEventListener('click', function() {
    window.location.href = 'view_bill.html'; 
});

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.href = 'newuser.html';
    }
}
