const getId = require('../utils/getId');

class Song {
	static #all = [{ id: 0, songName: 'My Song', songArtist: 'Me' }];
	//create a new song
	constructor(songName, songArtist) {
		this.id = getId();
		this.songName = songName;
		this.artist = songArtist;

		Song.#all.push(this);
	}
	// read all songs
	static list() {
		return [...Song.#all];
	}
	// read a single song
	static find(id) {
		return Song.#all.find((song) => song.id === id);
	}
	// update a song
	static editSongName(id, newName) {
		const song = Song.find(id);
		if (!song) return null;
		song.name = newName;
		return song;
	}
	// delete a song
	static delete(id) {
		const songIndex = Song.#all.findIndex((song) => Number(song.id) === id);
		if (songIndex < 0) return null;

		Song.#all.splice(songIndex, 1);
		return true;
	}
}

module.exports = Song;
