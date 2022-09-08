let createCatslist = []

fetch('https://api.thecatapi.com/v1/breeds')
    .then((response) => {
        return response.json()
    })
    .then((actualApiResponse) => {
        console.log(actualApiResponse)



        if (Array.isArray(actualApiResponse)) {
            onCatsApiSucess(actualApiResponse)


        }

    });


function onCatsApiSucess(breed = []) {
    createCatslist = breed;


    const origins = breed.map((actualApiResponse) => actualApiResponse.origin);
    // console.log("regions", regions)
    const uniqueOne = [...new Set(origins)]
    console.log("BREEDS", uniqueOne);

    uniqueOne.forEach((mainResponse) => {
        CreateRegionLink(mainResponse);
    });

    createCatsCards(breed)




    const createBreedsSelectOption = document.querySelector("#selectCats");
    createBreedsSelectOption.addEventListener('change', () => {
        document.querySelector('.list-breeds').innerHTML = '';
        const value = createBreedsSelectOption.value;



        if (value) {
            const findedCats = breed.find((breeds) => breeds.name === value);
            // console.log("on change the breed", value, findedCats)
            CreateCountryCards(findedCats);


        }
        else {
            createCatsCards(breed);

        }

         

    });
    // const findedCats = breed.find((breeds)=>  breeds.name === value);
    //   console.log("on change the breed", value, findedCats)
    //   CreateCountryCards(findedCats);


    const inputElement = document.querySelector("#searchCats")
    inputElement.addEventListener('keyup', () => {
        const searchValue = inputElement.value.toLowerCase();
        document.querySelector('.list-breeds').innerHTML = '';
        if (searchValue) {
            const searchCountries = breed.filter((breeds) =>
                breeds.name.toLowerCase().includes(searchValue)

            );
            createCatsCards(searchCountries);
        }
        else {
            createCatsCards(breed);
        }
        // const searchCountries = breed.filter(breeds =>  breeds.name.includes(searchValue ));
        // createCatsCards(searchCountries)
    })
}



function CreateRegionLink(region) {
    const a = document.createElement('a');
    a.setAttribute('href', '#')
    a.setAttribute('class', 'list-group-item list-group-item-action active bg-success bg-info form-label')
    a.setAttribute('id', 'region')
    a.innerText = region;
    document.querySelector('.list-group ').appendChild(a);

    a.addEventListener('click', () => {

        document.querySelector('.list-breeds').innerHTML = '';
        const regionNameclick = createCatslist.filter(
            (breeds) => breeds.origin === region
        );
        createCatsCards(regionNameclick);
    })

}


function createCatsCards(listOfCats = []) {
    console.log("breedscard", listOfCats);



    for (let i = 0; i < listOfCats.length; i++) {
        const loopedItemCats = listOfCats[i];
        const breedsName = loopedItemCats.name;


        creatSelectOption(breedsName);
        CreateCountryCards(loopedItemCats);


        // const selectOption = document.createElement('option')
        // selectOption.innerText = breedsName;
        // selectOption.value = breedsName;
        // document.querySelector('select').appendChild(selectOption);

    }


}


function creatSelectOption(breedsName) {


    const selectOption = document.createElement('option')
    selectOption.innerText = breedsName;
    selectOption.value = breedsName;
    document.querySelector('#selectCats').appendChild(selectOption);



}


function CreateCountryCards(breeds = {}) {
    // console.log("CreateCountryCards",breeds)


    const createColumDiv = document.createElement('div')
    createColumDiv.setAttribute("class", "col-md-4 mb-4");




    const cardTemplate = `<div class="card h-100">
     


           
            
        <img src="${breeds.image?.url}" alt="" class="card-img-top"/>



            <div class="card-body>
                <h2 class="card-title"> ${breeds.name}</h2>

                <table class="table table-bordered">

                    <tbody>

                        <tr>
                            <th>origins</th> 
                            <td>${breeds.origin}</td>
                                            
                        </tr>
                        <tr>
                            <th>ID</th>
                            <td>${breeds.id}</td>

                                                
                        </tr>





                    </tbody>





                </table>



            </div>


    </div>`

    createColumDiv.innerHTML = cardTemplate;
    document.querySelector('.list-breeds').appendChild(createColumDiv);

}