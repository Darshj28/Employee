$(document).ready(()=> {
    $("button").click(()=> {
        var email = $('input[type="email"]').val();
        var password = $('input[type="password"]').val();
        if (email == "" && password == ""){
            alert("Enter username & password");
        }
       
        else {
            $.ajax({
                 url: "http://localhost:3000/user",
                 method: "GET",
                 data: {
                    email: email,
                    password: password,
                 },
                 dataType : "json",
                 success : (x) => {
                   // for (i=0; i< x.length; i++){
                        if (email == "admin@gmail.com" && password == "admin") {
                            alert(email + " Successfully Login !");
                            console.log(x);
                            window.location = "home.html";
                         } 
                       else  {
                        console.log(alert);

                        alert("Wrong Username or password");
                       }
                         
                     
                      
                   // } 
                    //alert("Wrong Username or password");
                 
                    
                    
                 },
                 error: (err) => {
                    alert("Error: " + err);
                 },

            });
           
        };
        
       
    });
    
});