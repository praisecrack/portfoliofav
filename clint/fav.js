console.info("hello Test")

const HandleSend = () => {
    console.info("hello Test")
    var Username = document.getElementById("username").value
    var Email = document.getElementById("email").value
    var Message = document.getElementById("text").value
    var PhoneNumber = document.getElementById("phone").value
    const data =
    {
        name: Username,
        email: Email,
        message: Message,
        phone: PhoneNumber
    }
    const jsonData = JSON.stringify(data);

    console.log(data)

    fetch('http://localhost:5000/contact', { // Replace with your server endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Your request has been submitted successfully.');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting your request.');
        });

    // Clear the form fields after submission
    Username = document.getElementById("username").value = ""
    Email = document.getElementById("email").value = ""
    Message = document.getElementById("text").value = ""
    PhoneNumber = document.getElementById("phone").value = ""

}