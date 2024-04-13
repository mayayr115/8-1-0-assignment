const express = require('express');
const app = express();
const path = require('path');
const pathToDist = path.join(__dirname, '..', 'frontend', 'dist');

// Functions implementing Song class methods
const {
	serveSongs,
	createSong,
	editSongName,
	serveSong,
	deleteSong,
} = require('./controllers/songController');

const serveStatic = express.static(pathToDist);
const parseJSON = express.json();

const logRoutes = (req, res, next) => {
	const time = new Date().toLocaleString();
	console.log(`${req.method}: ${req.originalUrl} - ${time}`);
	next();
};

app.use(logRoutes);
app.use(serveStatic);
app.use(parseJSON);

app.get('/api/songs', serveSongs);
app.get('/api/songs/:id', serveSong);
app.post('/api/songs', createSong);
app.patch('/api/songs/:id', editSongName);
app.delete('/api/songs/:id', deleteSong);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Sever is listening on http://localhost:${PORT}`);
});
