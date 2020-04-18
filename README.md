# liri-node-app
This app will act as a language interpreter, utilizing the API's from bandsintown, Spotify, and OMDB. The app is designed to work with Node on the command line of your terminal or gitbash. To begin, the user must enter 'node liri.js' followed by the command desired. The app is set up by a series of switch cases in a javascript file that can recognize the below terminal commands and then call the correct API based upon the users entered command.

-----------------------------------------------------------------------------------
Terminal commands
1. concert-this <band/artist name>
    this command calls the bandsintown API and displays information pertaining to the venue of the Artists upcoming concerts. Liri will then show the user the venue name, venue location, and date of the venue searched.
    
    Concert command video link: https://drive.google.com/file/d/17R3AXHcLeWlrR-JbcF4SHU-OsAwI9v0I/preview

2. spotify-this-song <song title>
    this command calls the spotify API and displays information about the searched song. Once searched, Liri will bring up the song name (or a song with a similar title), Artist who performs the song, Album where the song is from, and a link to preview the song from Spotify. If no song title is specified, Liri will default search the title 'The Sign' by Ace of Base.
    
    Spotify command video link: https://drive.google.com/file/d/18MP-dFcvnbiCN74KYXjZMh8QBbFYDkhD/preview

3. movie-this <movie title>
    this command calls upon the OMDB movie database to gather meta data about a searched film. This command, followed by the users desired movie, will display the movie title, year of release, IMDB rating, Rotten Tomatoes rating, country produced, language, plot, and Actors/Actresses in the film. If no movie title is specified, Liri will default search the title 'Mr. Nobody'.
    
    Movie command video link: https://drive.google.com/file/d/1ebnXWiEKUcCA1RJaNzftPrQZaqqJAwDN/preview

4. do-what-it-says
    this command does not require any further search terms because it uses the existing text from random.txt to re-direct to any of the previous 3 commands. By default random.txt is set to spotify search the song "I want it that way", but that can simply be changed by altering the text in random.txt.
    
    Do-what command video link: https://drive.google.com/file/d/1Sc00cYKVW4fZr7HK4T8yoDQC94VoW4bn/preview

------------------------------------------------------------------------------------

All commands come with built in error handlers that will show the user how to troubleshoot any issues with their searches. 
