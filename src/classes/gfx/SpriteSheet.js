define([
    'Class',
    'ImageLoader'
], function(Class, ImageLoader) {
    'use strict';

    var sheets = {}
    
    var SpriteSheet = Class.extend({
        init: function(_name, _path) {
            sheets[_name] = this

            this.name = _name
            this.path = _path

            this.sheet = ImageLoader.load(_path)
        },
        crop: function(_x, _y, _width, _height) {
            return {
                sheet: this.sheet,
                x: _x, 
                y: _y, 
                width: _width, 
                height: _height
            }
        }
    })

    SpriteSheet.getSheet = function (_name) {
        return sheets[_name]
    }

    SpriteSheet.TILE_WIDTH = 64
    SpriteSheet.TILE_HEIGHT = 64

    return SpriteSheet
});