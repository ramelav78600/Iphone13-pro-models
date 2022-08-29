const API = `https://reqres.in/api/users`;

const responseApi = (apiresponse) => {
        return apiresponse.json();
    
    
    };

     const WhatsupApi = (item) => {


        const createWhatsupApi = document.createElement("div");
         createWhatsupApi.setAttribute("class", "ui-header");




        const contacts = document.createElement("div");
        contacts.setAttribute('class', 'ui-contact');

        
       createWhatsupApi.innerHTML = `
        <img src="${item.avatar}" class="ui-person-info-image" />

                          
         <h5>${item.first_name}</h5> 
         
         <h4>${item.last_name}</h4>

       
         
    `

     contacts.appendChild(createWhatsupApi);
      document.querySelector(".ui-persons-list-container").appendChild(contacts)


     }

     const otherresponseApi = (data = []) => {
             console.log("::onDataReceived::", data);
           data.data.forEach(WhatsupApi)
       }
      fetch(API)
      .then(responseApi)
      .then(otherresponseApi)