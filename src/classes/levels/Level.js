define([
    'Class',
    'Tile',
    'SpriteSheet',
    'Utils'
], function(Class, Tile, SpriteSheet, Utils) {
    'use strict';

    var current = null
    
    var Level = Class.extend({
        init: function(_path, _handler) {
            this.path = _path
            this.handler = _handler

            this.tiles = []
            
            this.loadLevel(_path)
        },
        loadLevel: function(_path) {
            let file = Utils.loadFileAsString(_path)
            let tokens = file.replace(/\n/g, ' ').split(' ')
            
            this.name   = tokens.shift().replace('_', ' ')
            this.sheet  = new SpriteSheet('level', 'res/gfx/tiles/' + tokens.shift())

            this.width  = parseInt(tokens.shift())
            this.height = parseInt(tokens.shift())            

            for (let x = 0; x < this.width; x++) {
                
                for (let y = 0; y < this.height; y++) {
                    if (!this.tiles[x])
                        this.tiles[x] = []

                    this.tiles[x][y] = tokens[x + (y * this.width)]
                }
            }
        },
        update: function(_dt) {
        },
        render: function(_g) {

            //render just what appears in display
            const xStart = parseInt(Math.max(0, 
                this.handler.getGameCamera().getxOffset() / Tile.DEFAULT_WIDTH
            ))
            const xEnd = parseInt(Math.min(this.width, 
                this.handler.getGameCamera().getxEnd() / Tile.DEFAULT_WIDTH
            ))

            const yStart = parseInt(Math.max(0, 
                this.handler.getGameCamera().getyOffset() / Tile.DEFAULT_HEIGHT
            ))
            const yEnd = parseInt(Math.min(this.height,
                this.handler.getGameCamera().getyEnd() / Tile.DEFAULT_HEIGHT
            ))

            for (let y = yStart; y < yEnd; y++) {                
                for (let x = xStart; x < xEnd; x++) {
                    Tile.getPositionByIndex(this.tiles[x, y])
                }
            }
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