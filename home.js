$(document).ready(()=> {
    $("button").click(()=> {
        window.location = "form.html";


    })
    $.ajax({
        url: "http://localhost:3000/employee",
        method: "GET",
        data: {
        name:name,
        
        
        
          
        },
        
    })
    let tbody = document.getElementById("tbody")

    fetch("http://localhost:3000/employee")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data)
            tbody.append(td_fun(data));
        })
    })
    function td_fun({ id,name,empcode,date,status}){
        let td = document.createElement('tr');
        td.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
                    
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            ${name} 
                        </div>
                       
                        
                    </div>
                      <td class="px-6 py-4 whitespace-nowrap">
                       <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                           ${empcode}
                       </span>
                      </td>
                   <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                           ${status}
                      </span>
                    </td>
                    <td> 
                             
                        ${document.getElementById("${id}"),'<button onclick="edit()">Edit </button>'}
                        ${id}

                         
                      </td>
               
               

                </div>
        </td>
       
        
        `;
        return td;
      
    }
   
       
})


 var editProfile = {};
 function edit(){
    alert("edit");
 
    //editProfile.id = document.getElementById("id")
    //console.log(id)
    window.location = "edit.html";
    //   $.ajax({
    //      url:"http://localhost:3000/employee/"+editProfile.id,
    //      method:"PUT",
        
    //      contentType: 'application/json', 
    //     success:(x)=>{
    //          alert(x.title+" successfully updated  ".);
    //         window.location="home.html";
    //      },
    //      error:(err)=>{
    //          alert("Error Occured...try again"+err);
    //          window.location="home.html";
    //     }
    //  })
 }

    
   
        



