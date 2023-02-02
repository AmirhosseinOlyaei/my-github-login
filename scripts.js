const accountFormElement = document.getElementById("account-form");
const userNameElement = document. getElementById("user-name-email");
const messageElement = document.getElementById("error-message");
const messageValue = `<p>Incorrect username or password ddddd</p>`

accountFormElement.addEventListener("submit", function(event) {
    event.preventDefault();
    const userName = String(userNameElement.value);

if (userName === '') {
  console.log('aaa');
    messageElement.innerHTML = messageValue
} else if (userName.length <= 6) {
    messageElement.innerHTML = messageValue
} else if (userName.includes('@') === false) {
  messageElement.innerHTML = messageValue
};

});