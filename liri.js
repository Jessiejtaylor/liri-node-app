// DEPENDENCIES
// =====================================

// Read and set environment variables
require("dotenv").config();

// Import the API keys
var keys = require("./keys");

// Import the node-spotify-api NPM package.
var Spotify = require("node-spotify-api");

// Import the axios npm package.
var axios = require("axios");

// Import the moment npm package.
var moment = require("moment");

// Import the FS package for read/write.
var fs = require("fs");

// Initialize the spotify API client using our client id and secret
var spotify = new Spotify(keys.spotify);


var command = process.argv[2]
var searchTerm = process.argv.slice(3).join(" ")

// FUNCTIONS
// =====================================

// Writes to the log.txt file
var writeToLog = function (data) {

  /** FIXME: BONUS (DONT DO THIS YET)
   * 
   * 

      In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.

      Make sure you append each command you run to the log.txt file.

      Do not overwrite your file each time you run a command.
    */

  // Append the JSON data and add a newline character to the end of the log.txt file

};

// Helper function that gets the artist name
var getArtistNames = function (artist) {
  return artist.name;
};
var command = process.argv[2];
// Function for running a Spotify search
var getMeSpotify = function (songName) {
  if (songName === undefined) {
    songName = "What's my age again";
  }



  //   /** TODO: Write the code to exceute the command below. 
  //    * 
  //    *      node liri.js spotify-this-song '<song name here>'
  //    * 

  // if (command === "spotify-this-song") {
  //     getMeSpotify()
  // }



  //     * This will show the following information about the song in your terminal/bash window

  //         1. Artist(s)

  //         2. The song's name

  //         3. A preview link of the song from Spotify

  //         4. The album that the song is from

  //     * If no song is provided then your program will default to "The Sign" by Ace of Base.

  //     * You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

  //     * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

  //   */
  spotify.search({
    type: "track",
    query: songName
  },
    //   capture any errors and output them to the console
    function (err, data) {
      if (err) {
        console.log("Error occured: " + err);
        return;
      }
      // output the response data from Spotify
      var songList = data.tracks.items;
      if (songList.length === 0) {
        console.log("No Results Found");
      } else {
        for (var i = 0; i < songList.length; i++) {
          console.log(i);
          console.log("Artist(s): " + songList[i].artists.map(getArtistNames));
          console.log("Song Name: " + songList[i].name);
          console.log("Preview Song: " + songList[i].preview_url);
          console.log("Album: " + songList[i].album.name);
          console.log("--------------------------------");
        }
      }
    }
  );
};

// Function for concert search
var getMyBands = function (searchTerm) {




  //FIXME: 
  var queryURL = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp";

  axios.get(queryURL).then(


    function (response) {
      var jsonData = response.data;

      console.log(jsonData)
      console.log(jsonData[0].venue)

      for (let i = 0; i < jsonData.length; i++) {
        console.log("venue:", jsonData[i].venue.name)
        console.log("location:", jsonData[i].venue.city + " " + jsonData[i].venue.country)
        console.log("Date:", moment(jsonData[i].datetime, "YYYY-MM-DD").format("MM/DD/YYYY"))
        console.log("----------------------------------------\n")
      }
      // Name of the venue

      // Venue location

      // Date of the Event (use moment to format this as "MM/DD/YYYY")


      // if (!jsonData.length) {
      //   console.log("No results found for " + artist);
      //   return;
      // }

      // var logData = [];

      // logData.push("Upcoming concerts for " + artist + ":");

      //FIXME: Finish the code below

    }
  );
};



// Function for running a Movie Search
var getMeMovie = function (movieName) {
  if (movieName === undefined) {
    movieName = "Mr Nobody";
  }

  //FIXME: 
  var urlHit = "CREATE-THE-URL-HERE";

  axios.get(urlHit).then(
    function (response) {
      var jsonData = response.data;

      //FIXME: Finish the code below
    }
  );
};


function getMyMovie(searchTerm) {
  console.log("http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy")
  axios.get("http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy").then(function (response) {
    // * Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.  

    //  

    console.log("Title:", response.data.Title)
    console.log("Year:", response.data.Year)
    console.log("imdbRating:", response.data.imdbRating)
    console.log("Rotton Tomatoes:", response.data.Ratings[1].Value)
    console.log("Country:", response.data.Country)
    console.log("Language:", response.data.Language)
    console.log("Plot:", response.data.Plot)
    console.log("Actors:", response.data.Actors)


  })
}


function getDoWhatItSays() {

  fs.readFile("./random.txt", "utf8", function (err, data) {

    var fileData = data.split(",")
    command = fileData[0]
    searchTerm = fileData[1]
    pick(command, searchTerm)
  })

}

// Function for determining which command is executed
var pick = function (command, searchTerm) {
  //TODO:  Write your code below
  //   repeat the switch command for each section
  // console.log("cd: " + commandData)
  //         concert-this

  // spotify-this-song

  // movie-this

  // do-what-it-says
  switch (command) { // if command === ...
    case "spotify-this-song": // "spotify-this-song" then
      getMeSpotify(searchTerm) // call the funct
      break;
    case "concert-this":
      getMyBands(searchTerm);
      break;
    case "movie-this":
      getMyMovie(searchTerm);
      break;
    case "do-what-it-says":
      getDoWhatItSays();
    default:
      break;
  }
  // This will be the main function to control which method to call. See function "runThis" is calling this pick method


};

// Function which takes in command line arguments and executes correct function accordingly
var runThis = function (command, searchTerm) {
  pick(command, searchTerm);
};

// MAIN PROCESS
// =====================================
runThis(command, searchTerm);

