var dropdown = document.querySelector(".dropdown");
var imagePlaceHolder = document.querySelector("#image-placeholder");
var nameplaceHolder = document.querySelector("#name-placeholder");
var firstName = document.querySelector("#first-name");
var lastName = document.querySelector("#last-name")

function changeAvatar(event){
event.preventDefault()

console.log(this.value)
imagePlaceHolder.setAttribute("src",this.value)
nameplaceHolder.textContent = firstName.value + " " + lastName.value

}

dropdown.addEventListener("change", changeAvatar)

// code below is from joe's branch feature/signin-signup with working signup form

// for login form
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
// for sign up form with form id from signup handlebars
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);


async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
  
    if (username && phone && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          phone,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success, user registered');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }

  async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
