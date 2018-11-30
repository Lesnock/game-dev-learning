define([
    'Class', 
    'Cell'
], function(Class, Cell) {
    'use strict';
    
    var Grid = Class.extend({
        init: function (_handler) {

            this.width = _handler.getWidth() / Grid.CELL_WIDTH
            this.height = _handler.getHeight() / Grid.CELL_HEIGHT

            this.cells = []

            for (let x; x <= this.width; x++) {
                for (let y; y <= this.height; y++) {
                    if (!this.cells[x])
                        this.cells[x] = []

                    this.cells[x][y] = []
                }
            }
        },
        addBody: function (_body) {
            var index = Grid.getIndex(_body.x, _body.y)

            var xCells = Math.ceil(_body.width / Grid.CELL_WIDTH)
            var yCells = Math.ceil(_body.height / Grid.CELL_HEIGHT)

            for (let x = 0; x <= xCells; x++) {
                for (let y; y <= yCells; y++) {
                    this.cells[x][y].push()
                }
            }
        },
        //Get a cell or create one
        getCell: function (_x, _y) {
            return this.cells[_x][_y]
        }
    })

    //Static
    Grid.CELL_WIDTH = 64
    Grid.CELL_HEIGHT = 64

    //Get the index of cell
    Grid.getIndex = function (_x, _y) {
        return {
            x: parseInt(_x / Grid.CELL_WIDTH),
            y: parseInt(_x / Grid.CELL_HEIGHT)
        }
    }

    return Grid
});