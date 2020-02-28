require("dotenv").config();
var axios = require("axios")
var moment = require("moment")
var Spotify = require('node-spotify-api');
// require is like javascript script tag: src
var keys = require("./keys")

var spotify = new Spotify(keys.spotify);
var command = process.argv[2]

// the below is for reference (what we tried in w3 schools to show how to take the space out of a song title in the array)
// var process_argv = ["node", "liri.js", "get", "me"];
// var citrus = process_argv.slice(2).join(" ");
// document.getElementById("demo").innerHTML = citrus

var searchTerm = process.argv.slice(3).join(" ")

console.log(searchTerm)
// concert-this



// movie-this

// do-what-it-says

// spotify-this-song

function startSearch() {

    if (command === "spotify-this-song") {
        spotifySearch()
    }
}

function spotifySearch(searchTerm) {

    // if no song is provided, default to the sign by ace of base
    if (searchTerm === undefined || null) {
        searchTerm = "The Sign Ace of Base"
    }

    spotify.search({ type: 'track', query: searchTerm }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // console.log(data.tracks.items);

        else {
            for (i = 0; i < data.tracks.items.length && i < 5; i++) {

            }
        }
    });
}

  // The song's name

    // A preview link of the song from Spotify

    // The album that the song is from

