document.getElementById('back-home').addEventListener('click', function() {
    window.location.href = 'view_bill.html';
});

document.getElementById('download-receipt').addEventListener('click', function() {
    alert('Downloading receipt...');
});

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.href = 'newuser.html';
    }
}
