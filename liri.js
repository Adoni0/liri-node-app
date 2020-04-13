require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var axios = require('axios');
var moment = require('moment');
var fs = require('fs');

var userInput = process.argv[2];
var userSearch = process.argv.slice(3).join(' ');
console.log(userInput, userSearch);

function startApp(command, search){
    switch(command){
       case 'concert-this':
           concert(); 
           break;
   
        case 'spotify-this-song':
            song();
            break;

        case 'movie-this':
            movie();
            break;
            
        case 'do-what-it-says':
            doWhat();
            break;    

        default:
            console.log('Please enter a valid command');    
     }
    
}

startApp(userInput, userSearch);


function concert(){
    var concertInput = process.argv.slice(3).join(' ');
    console.log(concertInput);
    axios.get("https://rest.bandsintown.com/artists/" + concertInput + "/events?app_id=codingbootcamp").then(function(data){
        console.log(data.data);
        
    })
}

function song() {
    var songInput = process.argv.slice(3).join(' ');
    console.log(songInput);
    axios.get("https://accounts.spotify.com/authorize?" + songInput + spotify)
}

function movie(){
    var movieInput = process.argv.slice(3).join(' ');
    axios.get('http://www.omdbapi.com/?t=' + movieInput + '=&y=&plot=short&apikey=trilogy&').then(function(data){

        var movieTitle = data.data.Title;
        var movieYear = data.data.Year;
        var movieImdb = data.data.imdbRating;
        var movieRt;
        var movieProduce = data.data.Country;
        var movieLanguage = data.data.Language;
        var moviePlot = data.data.Plot;
        var movieActors = data.data.Actors;

        console.log('Movie Title: ' + movieTitle);
        console.log('Year of release: ' + movieYear);
        console.log('IMDB rating: ' + movieImdb);
        console.log('Country: ' + movieProduce);
        console.log('Language: ' + movieLanguage);
        console.log('Plot: ' + moviePlot);
        console.log('Actors: ' + movieActors);

        // if(parseFloat.argv[3] === ''){
        //     movieInput = 'Mr. Nobody';
        // }

    })
    .catch(function(error){
        if(error.response){
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
        }else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
    })
}

function doWhat(){
    fs.readFile('random.txt', 'utf8', function (error, data) {
        if (error) {
            console.log(error);
            return;
        }


        
})
}
