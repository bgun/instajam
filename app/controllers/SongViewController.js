App.SongViewController = {
  showSongView: function(songId) {

  	var songModel = new App.Models.SongModel();

    var songView = new App.Views.SongView({
      songId: songId,
      model: songModel
    });
  }
}