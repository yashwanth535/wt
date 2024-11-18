//regular expressions


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
</head>

<body>
    <h2>Login Form</h2>
    <form id="loginForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="mobile">Mobile Number:</label>
        <input type="text" id="mobile" name="mobile" required><br><br>

        <button onclick="checkPass()">Login</button>
    </form>

    <p id="message"></p>

    <script>
      function checkPass() {
          event.preventDefault();
  
          const regex = {
              username: /^[a-zA-Z]{3,}$/,       
              email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
              phone: /^[0-9]{10}$/          
          };
  
          const username = document.getElementById('username').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('mobile').value;
  
      
          if (regex.username.test(username) && regex.email.test(email) && regex.phone.test(phone)) {
              console.log("Success");
          } else {
              console.log("Invalid input");
          }
      }
  </script>
  
</body>

</html>
