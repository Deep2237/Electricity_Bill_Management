function submitComplaint() {


    const complaintNumber = document.getElementById("complaint-number").value;



    const acknowledgementContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Complaint Acknowledgement</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 50px;
                    background-color: #e0e0e0;
                }
                .success-message {
                    color: green;
                    font-size: 1.5em;
                    margin-bottom: 20px;
                }
                .details {
                    font-size: 1.2em;
                }
            </style>
        </head>
        <body>
            <div class="success-message">Complaint Status</div>
            <div class="details">
                <p><strong>Complaint Number:</strong> ${complaintNumber}</p>
                <p><strong>Status:</strong> Pending</p>
            </div>
        </body>
        </html>
    `;

    const newWindow = window.open();
    newWindow.document.write(acknowledgementContent);
    newWindow.document.close();
    
    return false;
}

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.href = 'newuser.html';
    }
}