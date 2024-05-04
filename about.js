
var button = document.getElementById("submit");
button.addEventListener("click", getContactData);


function getContactData() {
    var nameElement = document.getElementById("name")
    var nameText = nameElement.value

    var emailElement = document.getElementById("email")
    var emailText = emailElement.value

    var messageElement = document.getElementById("message")
    var messageText = messageElement.value

    var alertMessage = `Your Data:\nName: ${nameText} \nEmail: ${emailText} \nMessage: ${messageText} \nHas been sent to me!\nThanks!`

    alert(alertMessage)
    clearFields()
}

function clearFields() {
    var nameElement = document.getElementById("name")
    nameElement.value = ""

    var emailElement = document.getElementById("email")
    emailElement.value = ""

    var messageElement = document.getElementById("message")
    messageElement.value = ""
}