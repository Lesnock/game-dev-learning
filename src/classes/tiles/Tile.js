define([
    'Class',
], function(Class) {
    'use strict';
    
    var tiles = []

    var Tile = Class.extend({
        init: function(_texture) {
            this.texture = _texture
        },
        update: function(_dt) {

        },
        render: function(_g, _x, _y) {
            
        }
    })

    //Tiles
    Tile.tiles = tiles

    Tile.set = function (_id, _texture) {
        tiles[_id] = new Tile(_texture)
        return tiles[_id]
    }

    //Get the axis of a tile in a tile sheet by the index
    Tile.getPositionByIndex = function (_index) {
        var x = Math.floor(_index / Tile.TILES_BY_ROW)
        var y = (_index - (x * Tile.TILES_BY_ROW)) * Tile.DEFAULT_WIDTH

        return {x, y}
    }

    //Static Methods
    Tile.DEFAULT_WIDTH = 64
    Tile.DEFAULT_HEIGHT = 64
    Tile.TILES_BY_ROW = 10

    return Tile
});