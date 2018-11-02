define([
    'Class'
], function(Class) {
    'use strict';
    
    var tiles = []

    var Tile = Class.extend({
        init: function(_id, _texture) {
            tiles[_id] = this
            this.id = _id
            this.texture = _texture            
        },
        update: function(_dt) {},
        render: function(_g, _x, _y) {
            _g.drawByCrop(this.texture, _x, _y, Tile.DEFAULT_WIDTH, Tile.DEFAULT_HEIGHT)
        }
    })

    //Tiles
    Tile.tiles = tiles

    //Static Methods
    Tile.add = function(_id, _texture) {
        new Tile(_id, _texture)
    }

    Tile.getTile = function(_id) {
        return tiles[_id]
    }

    //Static Methods
    Tile.DEFAULT_WIDTH = 64
    Tile.DEFAULT_HEIGHT = 64

    return Tile
});