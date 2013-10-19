App.Views.TrackView = Backbone.View.extend({

  id: "trackView",

  tagName: "div",

  events: {
  },

  initialize: function() {
    var t = this;
    t.render(t.options.songId);
    t.model = t.options.model;
    t.cells = [];
    var localName = localStorage.getItem('myName');
    if (localName) {
      t.model.set('name', localName);
    }
    console.log("Initializing TrackView");
  },

  render: function() {
    new FastClick(document.body);

    var t = this;
    var i,j;

    // build HTML for view, build the grid
    var trackTemplate = _.template(templateManager.getTemplate("track"));
    var trackHtml = trackTemplate({
      gridCells: App.Utils.makeGrid(App.settings.GRID_SIZE)
    });
    t.$el.html(trackHtml);
    $('#content').html(t.$el);

    // responsively set cell widths
    $grid = t.$el.find('#grid');
    $grid.height($grid.width());
    var cellWidth = (100 / App.settings.GRID_SIZE) + "%";
    $grid.find('.cell').width(cellWidth).height(cellWidth);

    $name = $('#userNameInput');
    $name.val(t.model.get('name'));

    var sendCells = function(cells) {
      var obj = {
        cells: t.cells && t.cells.length ? t.cells.join(',') : -1,
        name: $name.val()
      };
      console.log(obj);
      t.model.set(obj);
    };
    var changeCell = function(e) {
      console.log(e.type);
      var $t = $(e.currentTarget);
      var index = $t.index();

      if($t.hasClass('selected')) {
        $t.removeClass('selected');
        t.cells = _.filter(t.cells,function(i) { return i != index; });
      } else {
        $t.addClass('selected');
        t.cells.push(index);
      }
      smartSendCells(t.cells);
      return false;
    };
    var smartSendCells = _.debounce(sendCells, 100, true);
    var dragging = false;

    $grid
      .on('click','.cell',function(e) {
        changeCell(e);
      })
      .on('mouseup mousedown touchstart touchend',function(e) {
        if(e.type == "mousedown" || e.type == "touchstart") {
          dragging = true;
        }
        if(e.type == "mouseup" || e.type == "touchend") {
          dragging = false;
        }
      })
      .on('mouseover touchmove','.cell',function(e) {
        e.preventDefault();
        if(dragging) {
          changeCell(e);
        }
      });

    window.scrollTo(0,1);
  }

});
