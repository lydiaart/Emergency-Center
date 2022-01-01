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
        //document.location.replace('/');
        // history.back() -> equivelent to : history.go(-1)
        // after user logs in, send them back to their original page/ previous page
        location.replace(document.referrer);
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  //document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);