const API = `https://restcountries.com/v2/all`;
const onApiSuccess = (apiResponse) => {
    return apiResponse.json();
};

const regions = [];


const createFlagCard = (item) => {
    var regionArray = []

    regions.push(item.region)
    


    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const column = document.createElement("div");
    column.setAttribute("class", "col-3");


    card.innerHTML = `
     <img src="${item.flags?.svg}" class="card-img-top" />
      <div class="card-body">
          <h5 class=" mb-5">"${item.nativeName}"</h5>
          <p class="fw-bold">Population:<span class="fw-light">${item.population}</span></p>
          <p class="fw-bold" >Region:<span class="fw-light"> ${item.region}</span></p>
          <p class="fw-bold" >Capital: <span class="fw-light"> ${item.capital}</span></p>
     </div>
     


`
    column.appendChild(card);
    document.querySelector(".row").appendChild(column);
}

const onDataReceived = (data = []) => {
    console.log(":: onDataReceived ::", data);
    data.forEach(createFlagCard);
    console.log(regions)
    console.log(...new Set(regions))

}
fetch(API)
    .then(onApiSuccess)
    .then(onDataReceived)
    
