define([
    'Class',
    'MapRegister'
], function(Class, Mapping) {
    'use strict';

    var current = null
    
    var Level = Class.extend({
        init: function(_path, _handler) {
            this.path = _path
            this.handler = _handler

            this.tiles = []
            this.gameObjects = []
            this.width = 16
            this.height = 9
            
            this.loadLevel(_path)
        },
        loadLevel: function(_path) {
            for (let x = 0; x < this.width; x++) {
                for (let y = 0; y < this.height; y++) {

                    
                    const tile = new (Mapping.tiles[0])
                    tile.x = x
                    tile.y = y

                    this.tiles.push(tile)
                }
            }
            this.gameObjects.push(new (Mapping.gameObjects[0])(this.handler, 50, 60))
        },
        update: function(_dt) {
            //Tiles
            this.tiles.forEach((tile) => {
                
                tile._super_update(_dt)
                tile.update(_dt)
            })

            //GameObjects
            this.gameObjects.forEach((obj) => {
                obj._super_update(_dt)
                obj.update(_dt)
            })
        },
        render: function(_g) {
            //Tiles
            this.tiles.forEach((tile) => {
                tile._super_render(_g)
                tile.render(_g)
            })
            
            //GameObjects
            this.gameObjects.forEach((obj) => {
                obj._super_render(_g)
                obj.render(_g)
            })
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