let result = document.getElementById('result');
let searchBtn = document.getElementById('search-btn');
// let url = "https://api.nationalize.io/?name=";


let personName = "samnikal";
let finalUrl = url + personName;

fetch(finalUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.name);
    })
    .catch(error => {
        console.log(error);
    });

