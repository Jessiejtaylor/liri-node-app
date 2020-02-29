# liri-node-app

Jessie Taylor: Developer

Link to github repository: https://github.com/Jessiejtaylor/liri-node-app

Search Spotify for songs, Bands in town for concerts and OMBD for movies. Have Fun.

<b>How To Use:</b>

Use node to run this program. Use node liri.js then run one of the following comands, then add search text:

<b>concert-this</b><br>
- <command, artist name><br>
- Uses the bandsintown API to take a band name from the user and returns that bands next concert

![Image description](./concert-this.png)
![Image description](./concert-this-terminal.png)

<b>spotify-this-song</b><br>
- <command, song name><br>
- Uses the spotify API to take a song name from the user and returns the artist, song name, spotify-link and album

![Image description](./spotify-this.png)
![Image description](./spotify-this-terminal.png)

<b>movie-this</b><br>
- <command, movie name><br>
- Uses the OMDB API to take a movie name and returns the name, cast, release year, IMDB and Rotten Tomatoes rating, country of origin, language and plot)

![Image description](./movie-this.png)
![Image description](./movie-this-terminal.png)

<b>do-what-it-says</b><br>
- < command >
- Uses the built in readFile() method to access data from a prepopulated .txt file and return its information as a command/search query.)

![Image description](./do-what-it-says.png)
![Image description](./do-what-it-says-terminal.png)

<b>When running a command follow it by desired text/search:</b><br>
Example: node liri.js movie-this Miss Congeniality

<b>When concert-this command is used you will be provided with:</b><br>
- Name of the venue
- Venue location
- Date of the Event

<b>When spotify-this-song command is used you will be provided with:</b><br/>
- Artist(s)<br>
- The song's name<br>
- A preview link of the song from Spotify<br>
- The album that the song is from<br>
- If no song is provided then your program will default to "The - Sign" by Ace of Base.

<b>When movie-this command is used you will be provided with:</b><br>

- Title of the movie<br>
- Year the movie came out<br>
- IMDB Rating of the movie<br>
- Rotten Tomatoes Rating of the movie<br>
- Country where the movie was produced<br>
- Language of the movie<br>
- Plot of the movie<br>
- Actors in the movie<br>
- If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody<br>

<b>When do-what-it-says command:</b>

A random.txt file with search for spotify-this-song "I want it that way." This will give you the spotify results of "I want it that way."

<b>Technologies Used:</b><br>
- JavaScript<br>
- Node.js<br>
- Spotify API<br>
- Bands in Town API<br>
- OMDB API<br>
