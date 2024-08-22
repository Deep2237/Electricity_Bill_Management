    function register(){
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const consumerNumber = document.getElementById('consumer-number').value;
    const billNumber = document.getElementById('bill-number').value;
    const mobileNumber = document.getElementById('mobile-number').value;
    const email = document.getElementById('email').value;
    const cname = document.getElementById('name').value;


    const isvalid = true;

    if(consumerNumber.length !== 13)
    {
        alert('Consumer Number should be of 13 digits!');
        isvalid = false;
    }

    if(billNumber.length !== 5)
        {
            alert('Bill Number should be of 5 digits!');
            isvalid = false;
        }

    if(mobileNumber.length !== 10)
        {
            alert('Mobile Number should be of 10 digits!');
            isvalid = false;
        }

    if (password !== confirmPassword) {
        alert('Passwords and Confirm Password not matching!');
        isvalid = false;
    }

    
    const customerId = Math.floor(100000 + Math.random() * 900000);

    

    const newPageContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Successful</title>
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
                .message {
                color: blue;
                font-size: 1em;
                margin-bottom: 20px;
            }
            .details {
                font-size: 1.2em;
            }
                .button-section {
    text-align: center;
    margin-top: 20px;
    margin-right: 140px;
}
    button{
     padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
        background-color: #007bff;
        margin-left:120px;
    }

        </style>
    </head>
    <body>
        <div class="success-message">Consumer Registration Successful</div>
        <div class="message">Thank you for registering with Ebill Application</div>
        <div class="details">
            <p><strong>Customer ID:</strong> ${customerId}</p>
            <p><strong>Customer Name:</strong> ${cname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
            <div class="button-section">
            <button onclick="window.location.href='view_bill.html'">Back to Login</button>
        </div>
        </div>
    </body>
    </html>
`;

const newWindow = window.open();
newWindow.document.write(newPageContent);
newWindow.document.close();    

    return isvalid;
}
