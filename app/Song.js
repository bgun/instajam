App.Models.SongModel = Backbone.Model.extend({

});

App.Collections.SongCollection = Backbone.Firebase.Collection.extend({
	model: App.Models.SongModel,
	firebase: new Backbone.Firebase("https://mobilejam.firebaseio.com/songs")
});
