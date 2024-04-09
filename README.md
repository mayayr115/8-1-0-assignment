# 8-1-0-assignment

[Link](https://github.com/Gonzalomarcylabschool/8-1-0-express-rest-api-modelf23) to Gonzo's 8-1-0 repo

## Challenge

Build a `Song` model and a server application for maintaining a playlist. Each song should have an `id`, a `title`, and an `artist` (at minimum). The model should provide an interface for:
* Creating a new song
* Getting all songs
* Getting a single song
* Updating the title or artist of a song
* Deleting a song

Then, create an endpoint and a controller for each of these pieces of functionality. The endpoints should follow REST conventions and should all begin with `/api`

Finally, build a frontend react application that can interact with the songs API that you've built. It should be able to:
* Create: Add a new song to the list.
* Read: Display a list of all songs.
* Read: Display a single song.
* Update: Update a single songs's title or artist.
* Delete: Delete a single song.

Here is a recommended React Router page structure for your React app:
* `/`: The homepage which includes:
  * Form for creating a new song
  * List of all songs
* `/songs/:id`: The details of a single song which includes
  * The title, artist, and ID of the song
  * A form to submit a new title or artist for the song
  * A button to delete the song from the list
