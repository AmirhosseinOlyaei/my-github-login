const accountFormElement = document.getElementById("account-form");
const userNameElement = document. getElementById("user-name-email");
const messageElement = document.getElementById("error-message");
const messageValue = `
<div
class="flex justify-center items-center space-x-4 border border-[#ffc1c0] rounded-md p-3 mb-4 w-80 bg-[#ffebe8]">
<p>Incorrect username or password.</p>
<button class="" type="button" aria-label="Dismiss this message">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
        data-view-component="true" class="">
        <path fill-rule="evenodd" fill="#cc0e22"
            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z">
        </path>
    </svg>
</button>
</div>
`

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