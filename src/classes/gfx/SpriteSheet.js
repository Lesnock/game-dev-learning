define([
    'Class',
    'ImageLoader'
], function(Class, ImageLoader) {
    'use strict';
    
    var SpriteSheet = Class.extend({
        init: function(_path) {
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

    return SpriteSheet
});