// Define the valid users
const validUsers = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
  ];
  
  function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const user = validUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      alert('Login successful!');
      // Redirect to main.html using relative path
      window.location.href = '../main.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
  
  // Add event listener to the login button
  document.getElementById('login').addEventListener('click', login);
  
  // Ensure the login button triggers the login function
  document.addEventListener('DOMContentLoaded', (event) => {
    const loginButton = document.getElementById('login');
    if (loginButton) {
      loginButton.addEventListener('click', login);
    }
  });