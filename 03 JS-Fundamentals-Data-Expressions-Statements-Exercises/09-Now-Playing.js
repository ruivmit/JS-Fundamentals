function nowPlaying(input) {
    let artistName = input[0];
    let trackName = input[1];
    let duration = input[2];
    console.log("Now Playing: " + trackName + " " + '-' + " " + artistName + " " + '\['+ duration + ']')
}
nowPlaying(['Number One', 'Nelly', '4:09'])