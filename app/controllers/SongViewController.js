App.SongViewController = {
  showSongView: function(songId) {
    var songView = new App.Views.SongView({
      songId: songId,
      model: App.Models.SongModel
    });
  }
}