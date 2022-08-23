const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
const main = document.getElementById("main");

main.innerHTML = "<p>Loading...";

fetchPromise.then(response => {
    return response.json();
}).then(people => {
    main.innerHTML = listOfNames(people);
});
function listOfNames(people) {
    const names = people.map(person => `<li>${person.name}</li>`).join("\n");
    return `<ul>${names}</ul>`
}