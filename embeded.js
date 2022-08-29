const API = `https://api.thecatapi.com/v1/breeds`;

const onApiSuccess = (apiResponse) => {
    return apiResponse.json();
}

const onDataRecive = (data = []) => {
    console.log(data);

    data.forEach( (item) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        card.innerHTML = `
           <img src ="${item.image?.url}" class="card-img-top" alt="">
            <div class="card-body">
            <h5>${item.name}</h5>
            </div>
        `

        document.querySelector(".ui-container").appendChild(card)
    })
}

fetch(API)
    .then(onApiSuccess)
    .then(onDataRecive)