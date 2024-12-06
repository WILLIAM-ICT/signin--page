// JavaScript to handle form submissions and display appropriate forms
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.querySelector('#login-form   
 a');
const signupLink = document.querySelector('#signup-form a');

loginLink.addEventListener('click', () => {
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});

signupLink.addEventListener('click', () => {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

// Add event listeners for form submissions and handle AJAX requests to your backend
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get email and password from form fields
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Send AJAX request to your backend to authenticate the user
  // ...
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get email and password from form fields
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;   


  // Send AJAX request to your backend to register the user
  // ...
});
