define([
    'Class',
    'Tile', 
    'MapRegister',
    'Utils'
], function(Class, Tile, Mapping, Utils) {
    'use strict';

    var current = null
    
    var Level = Class.extend({
        init: function(_path, _handler) {
            this.path = _path
            this.handler = _handler

            this.items = []
            
            this.loadLevel(_path)
        },
        loadLevel: function(_path) {
            let file = Utils.loadFileAsString('src/classes/levels/level1.lvl')
            let tokens = file.replace(/\n/g, ' ').split(' ')
            
            this.name   = tokens.shift().replace('_', ' ')
            this.width  = parseInt(tokens.shift())
            this.height = parseInt(tokens.shift())

            for (let x = 0; x < this.width; x++) {
                
                for (let y = 0; y < this.height; y++) {

                    let element = tokens[x + (y * this.width)]

                    //first char / type of item
                    const type = (element != undefined) ? element.charAt(0) : 'none'

                    element = (element != undefined) ? parseInt(element.substring(1)) : 't01'

                    //Instantiate tile or game object
                    switch (type) {
                        case 't':
                        var item = new (Mapping.tiles[element])
                        break

                        case 'g':
                        var item = new (Mapping.gameObjects[element])(this.handler, 100, 100)
                        break

                        default:
                        var item = new (Mapping.tiles[1])
                    }
                    
                    item.x = x
                    item.y = y

                    this.items.push(item)
                }
            }
        },
        update: function(_dt) {
            //Tiles
            this.items.forEach((item) => {
                
                item._super_update(_dt)
                item.update(_dt)
            })
        },
        render: function(_g) {
            //Tiles
            this.items.forEach((item) => {
                item._super_render(_g)
                item.render(_g)
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