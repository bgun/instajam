App.TrackViewController = {

  showTrackView: function() {
    var trackView = new App.Views.TrackView({
      model: new App.Models.TrackModel()
    });
  }

}
