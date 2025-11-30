// Store users and passwords in an object
const users = {
    mdashif: "6290", // Default user
  };
  
  // Login form event listener
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting
  
    const userId = document.getElementById("userId").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");
  
    // Validate credentials
    if (users[userId] && users[userId] === password) {
      // Redirect to another page
      window.location.href = "index.HTML";
    } else {
      // Show error message
      errorMessage.textContent = "Invalid User ID or Password. Please try again.";
    }
  });
  
  // Register form event listener
  document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting
  
    const newUserId = document.getElementById("newUserId").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();
    const registerMessage = document.getElementById("registerMessage");
  
    // Check if user ID already exists
    if (users[newUserId]) {
      registerMessage.textContent = "User ID already exists. Please choose a different one.";
      registerMessage.style.color = "red";
    } else {
      // Add new user
      users[newUserId] = newPassword;
      registerMessage.textContent = "Registration successful! You can now log in.";
      registerMessage.style.color = "green";
  
      // Clear the registration form
      document.getElementById("registerForm").reset();
    }
  });
  