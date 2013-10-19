App.Utils = {
  makeGrid: function(gridSize) {
    var gridTemplate  = _.template(templateManager.getTemplate("grid"));
    var gridArea = gridSize * gridSize;
    var grid = Array(gridArea);
    for(i=0;i<grid.length;i++) {
      grid[i] = { index: i };
    }
    return gridTemplate({grid:grid});
  }
}
