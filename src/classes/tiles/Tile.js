define([
    'Class'
], function(Class) {
    'use strict';
    
    var tiles = []

    var Tile = Class.extend({
        components: {

        },

        //coords
        x: 0,
        y: 0,

        init: function(_texture) {
            this.texture = _texture

            Object.keys(this.components).forEach((_name) => {
                this[_name] = new (this.components[_name])(this)
            })
        },
        update: function(_dt) {},
        render: function(_g) {},
        _super_update: function(_dt) {
            Object.keys(this.components).forEach((_name) => this[_name].update())
        },
        _super_render: function(_g) {            
            _g.drawByCrop(this.texture, this.x * Tile.DEFAULT_WIDTH, this.y * Tile.DEFAULT_HEIGHT, Tile.DEFAULT_WIDTH, Tile.DEFAULT_HEIGHT)
            Object.keys(this.components).forEach((_name) => this[_name].render(_g))
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