App.Views.LegendView = Backbone.View.extend({

  // id: "legend",
  tagName: "ul",

  events: {
  },

  initialize: function(options) {
    var self = this;
    this.model = options.model;
    this.model.on('change', function(){
      self.render();
    });
  },

  render: function() {
    var templateFn = _.template(templateManager.getTemplate('legend'));
    var tracks = this.model.tracksChanged();
    if (tracks && tracks.length) {
      var html = templateFn({tracks:tracks});

      // debugger;
      // this.$el.html(template);
      $('#legend').html(html); // for some reason, the above doesn't work, but this does. :(
    }
    return this;
  },

});
