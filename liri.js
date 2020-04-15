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
           concert(search); 
           break;
   
        case 'spotify-this-song':
            song(search);
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


function concert(concertInput){
    
    axios.get("https://rest.bandsintown.com/artists/" + concertInput + "/events?app_id=codingbootcamp").then(function(data){
        console.log(data.data[0].venue.name);
        var response = data.data;
        for(let i = 0; i < data.data.length; i++){
            var venueName = response[i].venue.name;
            var venueLocation = response[i].venue.city;
            
            var date = moment(response[i].datetime).format('MM/DD/YYYY');
            console.log('Venue Name: '   + venueName);
            console.log('Venue Location: ' + venueLocation);
            console.log('Date: ' + date);
        }

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
            
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
    })
};

function artists(artist){
    return artist.name;
}

function song(songInput) {
    if(songInput === undefined){
        songInput = 'The Sign';
    }
    spotify.search({ type: 'track', query: songInput }, function(err, data) {
        if(err){
            console.log(err)
        }
        var items = data.tracks.items;
        // console.log(items[0].artists);
        for(let i = 0; i < items.length; i++){
            var name = items[i].artists.map(artists)
            console.log(name.toString());
            console.log(items[i].name);
            console.log(items[i].preview_url);
            console.log(items[i].album.name);
        }


    })
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
        var random = data.split(',');
        console.log(random);
        // startApp(random[0], random[1]);
        

        
})
}
