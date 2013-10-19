App.SongViewController = {
  showSongView: function(songId) {
    var songView = new App.Views.SongView({
      songId: songId,
      bmp: bmp
    });
  }
}