//let tbody = document.getElementById("tbody")


// $.ajax({
//     url: "http://localhost:3000/employee",
//     method: "PUT",
//     data: {
//         id:id,
//         name:name,
        
    
    
    
      
//     },
    
// })
document.getElementById({id})
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
            url: " http://localhost:3000/employee/+id",
            method:"PUT",
            // data: editBookingObject,
            // contentType: 'application/json', 
            // success:(x)=>{
            //     alert(x.title+" successfully updated );
            //     window.location="../html/userHome.html";
            // },
            // error:(err)=>{
            //     alert("Error Occured...try again"+err);
            //     window.location="../html/userHome.html";
            // }
            
            data: {
                 "name": name,
                // "date": date,
                 "empcode": empcode,
                 "status": status,
                
                
               
            },
        
            dataType:"json",
            success:(x)=>{
                alert("Updated succesfully !");
                window.location="home.html";
                console.log(x);
            }
            
        })
        
        
       } )
    }  
   
        

)

// fetch("http://localhost:3000/employee")
// console.log(FormData)
//     .then(res => res.json())
//     .then(json => {
//         json.map(data => {
//             console.log(data)
//             tbody.append(td_fun(data));
//         })
//     })

//     function td_fun({ id,name,empcode,date,status}){
//         let td = document.createElement('tr');
//         td.innerHTML = `
//         <td class="form">
//             <div class="">
                    
//                     <div class="ml-4">
//                         <div class="text-sm font-medium text-gray-900">
//                             ${name}
//                         </div>
                       
                        
//                     </div>
//                       <td class="px-6 py-4 whitespace-nowrap">
//                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                            ${empcode}
//                        </span>
//                       </td>
//                    <td class="px-6 py-4 whitespace-nowrap">
//                       <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                            ${status}
//                       </span>
//                     </td>
//                     \
               
               

//                 </div>
//         </td>
       
        
//         `;
//         return td;
      
//     }
   
       
