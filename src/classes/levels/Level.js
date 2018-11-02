define([
    'Class',
    'TileRegister'
], function(Class, Tile) {
    'use strict';

    var current = null
    
    var Level = Class.extend({
        init: function(_path) {
            this.tiles = []
            this.gameObjects = []
            this.path = _path
            this.width = 10
            this.height = 1
            this.loadLevel(_path)
        },
        loadLevel: function(_path) {
            for (let x = 0; x < this.width; x++) {
                for (let y = 0; y < this.height; y++) {
                    if (!this.tiles[x])
                        this.tiles[x] = []

                    this.tiles[x][y] = 0
                }
            }
        },
        update: function(_dt) {

        },
        render: function(_g) {
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    this.getTileByPosition(x, y).render(_g, x * Tile.DEFAULT_WIDTH, y * Tile.DEFAULT_HEIGHT)
                }
            }
        },
        getTileByPosition: function(_x, _y) {
            return Tile.getTile(this.tiles[_x][_y])
        }
    })

    //Static Methods
    Level.getLevel = function() {
        return current
    }

    Level.setLevel = function(_level) {
        current = _level
    }
    
    return Level
});