const express = require('express');
const path = require('path');

// Functions implementing Song class methods
const {
	serveSongs,
	createSong,
	editSongName,
	serveSong,
} = require('./controllers/songController');

const app = express();

const PORT = process.env.PORT || 8080;

const pathToDist = path.join(__dirname, '..', 'client', 'dist');