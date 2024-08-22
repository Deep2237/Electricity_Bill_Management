function populateCategory() {
    const complaintType = document.getElementById("complaint-type").value;
    const categorySelect = document.getElementById("category");

    categorySelect.innerHTML = "<option value=''>Select Category</option>";

    const categories = {
        "Billing related": ["Overcharging", "Incorrect Bill", "Late Payment Penalty"],
        "Voltage related": ["Low Voltage", "High Voltage", "Voltage Fluctuation"],
        "Frequent Disruption": ["Power Outages", "Frequent Power Cuts"],
        "Street light related": ["Light Not Working", "Light Flickering"],
        "Pole related": ["Pole Damaged", "Pole Leaning", "Pole Blocking Road"]
    };

    if (categories[complaintType]) {
        categories[complaintType].forEach(function(category) {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
    }
}

function submitComplaint() {

    const complaintId = Math.floor(100000 + Math.random() * 900000);

    const consumerNumber = document.getElementById("consumer-number").value;

    const complaintType = document.getElementById("complaint-type").value;

    const category = document.getElementById("category").value;

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
            <div class="success-message">Complaint Submitted Successfully!</div>
            <div class="details">
                <p><strong>Complaint ID:</strong> ${complaintId}</p>
                <p><strong>Consumer Number:</strong> ${consumerNumber}</p>
                <p><strong>Complaint Type:</strong> ${complaintType}</p>
                <p><strong>Category:</strong> ${category}</p>   
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

function cancelComplaint() {
    if (confirm("Are you sure you want to cancel the complaint?")) {
        document.getElementById("complaint-form").reset();
    }
}

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.href = 'newuser.html';
    }
}