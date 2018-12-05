define([
    'Class',
    'SpriteSheet',
    'Tile',
    'Utils'
], function(Class, SpriteSheet, Tile, Utils) {
    'use strict';

    var current = null
    
    var Level = Class.extend({
        init: function(_path, _handler) {
            this.path = _path
            this.handler = _handler

            this.tiles = []
            
            this.loadLevel(_path)
        },
        loadLevel: async function(_path) {
            let file = Utils.loadFileAsString(_path)
            let tokens = file.replace(/\n/g, ' ').split(' ')
            
            this.name   = tokens.shift().replace('_', ' ')
            this.sheet  = new SpriteSheet('level', 'res/gfx/tiles/' + tokens.shift())
            this.colliders = 

            this.width  = parseInt(tokens.shift())
            this.height = parseInt(tokens.shift())            

            for (let x = 0; x < this.width; x++) {
                
                for (let y = 0; y < this.height; y++) {
                    if (!this.tiles[x])
                        this.tiles[x] = []

                    this.tiles[x][y] = tokens[x + (y * this.width)]
                }
            }

            // const teste = await Utils.loadJS('levels/teste.js')
            // teste.caio()
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
                    //const positionInSheet = Level.getPositionByIndex(this.tiles[x, y])
                    const pos = Level.getPositionByIndex(parseInt(this.tiles[x][y]))

                    const crop = this.sheet.crop(pos.x, pos.y, Tile.DEFAULT_WIDTH, Tile.DEFAULT_HEIGHT)

                    _g.drawByCrop(crop, x * Tile.DEFAULT_WIDTH, y * Tile.DEFAULT_HEIGHT)
                }
            }
        }
    })

    //Get the axis of a tile in a tile sheet by the index
    Level.getPositionByIndex = function (_index) {
        var y = Math.floor(_index / Tile.TILES_BY_ROW)    
        var x = (_index - (y * Tile.TILES_BY_ROW)) * Tile.DEFAULT_WIDTH

        return {x, y}
    }

    //Static Methods
    Level.getLevel = function() {
        return current
    }

    Level.setLevel = function(_level) {
        current = _level
    }
    
    return Level
});