$(document).ready(()=>
    {
        $("button").click(()=>
       {
         var name =$('input[type="text"]').val();
         var date =$('input[type="date"]').val();
         var empcode =$('#empcode').val();
         var status = $('#status').val();

         jsonObject={
            
         }
         $.ajax({
            url: " http://localhost:3000/employee",
            method:"POST",
            
            data: {
                "name": name,
                "date": date,
                "empcode": empcode,
                "status": status,
                
                
               
            },
        
            dataType:"json",
            success:(x)=>{
                window.location="home.html";
                console.log(x);
            }
            
        })
        
        
       } )
    }  
   
        

)
