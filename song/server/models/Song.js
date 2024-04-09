const getId = require('../utils/getId');

class Song {
	static #all = [{ id: 0, songName: 'My Song' }];
	//create a new song
	constructor(songName) {
		this.id = getId();
		this.songName = songName;

		Song.#all.push(this);
	}
	// read all songs
	static list() {
		return Song.#all;
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
		const songIndex = Song.#all.findIndex(
			(Song) => Song.id === id
		);
		if (songIndex < 0) return null;

		Song.#all.splice(songIndex, 1);
		return true;
	}
	// delete all songs
	static deleteAll() {
		if (!Song.#all.length) return null;

		Song.#all.length = 0;
		return Song.#all;
	}
}

module.exports = Song;
