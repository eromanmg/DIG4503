//creates a constant variable for axios to be used througout the code
const axios = require('axios');

//fetches the url for the pokemon api and allows it to get data from it
axios('https://pokeapi.co/api/v2/pokemon/metapod')

//the then function handles the success
.then(function(response) {

    const pokemon = response.data;

//this line wil return an object with data on the pokemon metapod
    console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
})
//the catch function handles the errors
.catch(function (error) {

    console.log("Error: " + error);
});