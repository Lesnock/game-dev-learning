define([], function() {
    'use strict';
    
    var ImageLoader = {}

    //Static Method
    ImageLoader.load = function(_path) {
        const img = new Image()
        img.src = _path
        return img
    }

    return ImageLoader
});