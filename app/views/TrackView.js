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

    var trackTemplate = _.template(templateManager.getTemplate("track"));
    var gridTemplate  = _.template(templateManager.getTemplate("grid"));

    var gridWidth = App.settings.GRID_SIZE;
    var gridArea = gridWidth * gridWidth;
    var grid = Array(gridArea);
    for(i=0;i<grid.length;i++) {
      grid[i] = {
        index: i,
        selected: false
      };
    }

    var trackHtml = trackTemplate({
      subTemplate: gridTemplate({
        grid: grid
      })
    });

    t.$el.html(trackHtml);
    $('#content').html(t.$el);
    $grid = t.$el.find('#grid');
    $grid.height($grid.width());
    var cellWidth = (100 / gridWidth) + "%";
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

      if(grid[index].selected) {
        grid[index].selected = false;
        $t.removeClass('selected');
        t.cells = _.filter(t.cells,function(i) { return i != index; });
      } else {
        grid[index].selected = true;
        $t.addClass('selected');
        t.cells.push(index);
      }
      smartSendCells(t.cells);
      return false;
    };
    var smartSendCells = _.debounce(sendCells, 100, true);
    var dragging = false;

    $('#content').on('click','.cell',function(e) {
      changeCell(e);
    });
    $('#content').on('mouseup mousedown touchstart touchend',function(e) {
      if(e.type == "mousedown" || e.type == "touchstart") {
        dragging = true;
      }
      if(e.type == "mouseup" || e.type == "touchend") {
        dragging = false;
      }
    });
    $('#content').on('mouseover touchmove','.cell',function(e) {
      e.preventDefault();
      if(dragging) {
        changeCell(e);
      }
    });

    window.scrollTo(0,1);
  }

});
