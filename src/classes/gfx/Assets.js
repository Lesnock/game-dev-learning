define([
    'Class',
    'SpriteSheet'
], function(Class, SpriteSheet) {
    'use strict';

    var assets = {}
    
    var Assets = Class.extend({
        init: function(_name, _path) {
            assets[_name] = this
            this.name = _name
            this.path = _path
            this.sheet = new SpriteSheet(this.path)
        }
    })

    //Statics
    //Dimensions
    Assets.PLAYER_WIDTH = 64
    Assets.PLAYER_HEIGHT = 64

    //Get an asset by name
    Assets.getAsset = function (_name) {
        return assets[_name]
    }

    return Assets
});