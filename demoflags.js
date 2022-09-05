fetch('https://restcountries.com/v2/all')
   .then((response) => {
    return response.json();
   })
   .then((auctualApiReponse) => {
     console.log(auctualApiReponse);

     if (Array.isArray(auctualApiReponse)){
        
        const regions = auctualApiReponse.map((country) => country.region)
        const uniqueRegions = [...new Set(regions)]
        console.log(uniqueRegions);
        uniqueRegions.forEach(regionName => {
            const a = document.createElement("a");
            a.setAttribute('href', '#');
            a.setAttribute('class', "list-group-item list-group-item-action");
            a.setAttribute('Id', regionName);
            a.innerText = regionName;
            document.querySelector('.list-group').appendChild(a);
        })
     }
   })