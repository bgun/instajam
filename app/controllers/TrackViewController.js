App.TrackViewController = {

  showTrackView: function(songId) {
    var trackView = new App.Views.TrackView({
      songId: songId,
      model: App.Models.Track
    });
  }

}
