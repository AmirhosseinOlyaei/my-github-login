// form validation:

const accountFormElement = document.getElementById("account-form");
const userNameElement = document. getElementById("user-name-email");
const passwordElement = document. getElementById("password");
const messageElement = document.getElementById("error-message");
const errorMessage = `
<div
class="flex justify-center items-center space-x-4 border border-[#ffc1c0] rounded-md p-3 mb-4 w-80 bg-[#ffebe8]">
<p>Incorrect username or password.</p>
<button class="" type="button" aria-label="Dismiss this message">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
        data-view-component="true">
        <path fill-rule="evenodd" fill="#cc0e22"
            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z">
        </path>
    </svg>
</button>
</div>
`

accountFormElement.addEventListener("submit", function(event) {
    event.preventDefault();
    const userNameValue = String(userNameElement.value);
    const passwordValue = String(passwordElement.value);

// Username or email address is not empty.
// Username or email address is more that 6 characters.
if (userNameValue === '' || userNameValue.length < 6 || userNameValue.includes('@') === false) {
    messageElement.innerHTML = errorMessage
} 
// Password fields is not empty.
// Password field is more than 6 characters.
else if (passwordValue === '' || passwordValue.length < 6) {
  messageElement.innerHTML = errorMessage
} else {
 messageElement.innerHTML = '';
}

});

// closing error message box:
// messageElement.addEventListener("click", function(event2) {
//   document.getElementById("error-message").classList.add('invisible');
// });

// closing error message box:
// messageElement.addEventListener("click", function myFunction() {
//   var x = messageElement;
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// });