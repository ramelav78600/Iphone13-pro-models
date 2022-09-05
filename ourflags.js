const API = `https://restcountries.com/v2/all`;
const onApiSuccess = (apiResponse) => {
    return apiResponse.json();
  };
      const regions = []
  
  const createFlagCard = (item) => {
    regions.push(item.region)
     (...new set(regions))
      
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const column = document.createElement("div");
      column.setAttribute("class", "col-3");
      
      card.innerHTML = `
          <img src="${item.flags?.svg}" class="card-img-top" />
          <div class="card-body">
            <h3>${item.nativeName}</h3>
            <p class="fw-bold"> ISO Alpha-2:<span class="fw-light">${item.alpha2Code}</span></p>
             <p class="fw-bold" >ISO Alpha-3:<span class="fw-light"> ${item.alpha3Code}</span></p>
               <p class="fw-bold" >UN Code: <span class="fw-light"> ${item.numericCode}</span></p>
                 <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary viewAllEndpoints" data-bs-toggle="modal" data-bs-target="#exampleModal" value="AD">
                View All Endpoints
              </button>
            </div>
            <button type="button" class="btn btn-sm btn-outline-secondary embedSVG" data-bs-toggle="modal" data-bs-target="#modalTwo" value="AD">
                Embed SVG
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary embedPNG" data-bs-toggle="modal" data-bs-target="#modalTwo" value="AD">
                Embed PNG
              </button>
          </div>
          </div>
      `

      column.appendChild(card);

      document.querySelector(".row").appendChild(column);
      
    }
  
  const onDataReceived = (data = []) => {
    console.log(":: onDataReceived ::", data);
    data.forEach(createFlagCard)
    console.log( regions);
    return [...new Set(regions)];
  }
  
fetch(API)
.then(onApiSuccess)
.then(onDataReceived)