const Song = require('../models/Song');

// use the Song model to serve all playlists (READ)
const serveSongs = (req, res) => {
	res.json(Song.list()); // playlist is a static method in the Song class
};

// use the Song model to serve one playlist (READ)
const serveSong = (req, res) => {
	const { id } = req.params;
	const song = Song.find(Number(id)); // find static method in the Song class
	if (!song) {
		res.status(404).send('Song not found');
		return;
	}
	res.send(song);
};

const createSong = (req, res) => {
	const { songName } = req.body;
	const newSong = new Song(songName);
	res.send(newSong);
};

const editSongName = (req, res) => {
	const { id } = req.params;
	const { newName } = req.body;
	const updatedSong = Song.editSongName(Number(id), newName);
	if (!updatedSong) {
		res.status(404).send('Song not found');
		return;
	}
	res.send(updatedSong);
};
module.exports = {
	serveSongs,
	createSong,
	editSongName,
	serveSong,
};
