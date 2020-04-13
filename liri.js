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


