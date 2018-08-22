var playlist = new Object({ artistName: 'songTitle' })

function updatePlaylist(playlist, artistName, songTitle) {
  /*playlist['artistName'] = songTitle
  playlist['artistName'] = songTitle  /*line 146 of readme*/
  Object.assign({ artistName: 'songTitle' }) /*line 192 of readme -- We can use `Object.assign()` to create a new object and pass it properties from existing objects.*/
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}
