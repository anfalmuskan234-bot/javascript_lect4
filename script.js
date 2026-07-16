console.log('hello')

 document.getElementById("loginForm").addEventListener("submit", function (event) { 
        event.preventDefault(); 
        
        let username = document.getElementById("username").value; 
        let password = document.getElementById("password").value; 
        let message = document.getElementById("message"); 
        console.log(username)
        
        console.log(username);
        
        if (username === "Anfal" && password === "Anfal234") { 
            message.style.color = "green"; 
            message.textContent = "Login Successful!"; 
        } else { 
            message.style.color = "red"; 
            message.textContent = "Invalid Username or Password!"; 
        } 
    });