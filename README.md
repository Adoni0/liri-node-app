# liri-node-app
This app will act as a language interpreter, utilizing the API's from bandsintown, Spotify, and OMDB. The app is designed to work on the command line of your terminal or gitbash. To begin, the user must enter 'node liri.js' followed by the command desired. 

-----------------------------------------------------------------------------------
Terminal commands
1. concert-this <band/artist name>
    this command calls the bandsintown API and displays information pertaining to the venue of the Artists upcoming concerts. Liri will then show the user the venue name, venue location, and date of the venue searched.

2. spotify-this-song <song title>
    this command calls the spotify API and displays information about the searched song. Once searched, Liri will bring up the song name (or a song with a similar title), Artist who performs the song, Album where the song is from, and a link to preview the song from Spotify.

3. movie-this <movie title>
    this command calls upon the OMDB movie database to gather meta data about a searched film. This command, followed by the users desired movie, will display the movie title, year of release, IMDB rating, Rotten Tomatoes rating, country produced, language, plot, and Actors/Actresses in the film.

4. do-what-it-says
    this command does not require any further search terms because it uses the existing text from random.txt to re-direct to any of the previous 3 commands. By default random.txt is set to spotify search the song "I want it that way", but that can simply be changed by altering the text in random.txt.

------------------------------------------------------------------------------------

All commands come with built in error handlers that will show the user how to troubleshoot any issues with their searches. 
