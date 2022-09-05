fetch (`https://api.thecatapi.com/v1/breeds`)
 .then((response) =>{
    return response.json();
 })
 .then((actualApiRespons)=>{
    console.log(actualApiRespons);

    if(Array.isArray(actualApiRespons)){

        const origons = actualApiRespons.map((breed) => breed.origin)
        const uniqueOrigons = [...new Set(origons)]
          console.log(uniqueOrigons);
          uniqueOrigons.forEach(origonName =>{
            const a = document.createElement("a");
            a.setAttribute('href', '#');
            a.setAttribute('class', 'list-group-item list-group-item-action');
            a.setAttribute('Id', origonName);
            a.innerText = origonName;
            document.querySelector('.list-group').appendChild(a);
          })
    }
 })
