define([
    'Tile',
    'Assets'
], function(Tile, Assets) {
    'use strict';
    
    var GrassTile = Tile.extend({
        init: function (_handler) {
            this.assets = Assets.getAsset('tilesWordl_1')
            this.texture = this.assets.sheet.crop(0, 0, Tile.DEFAULT_WIDTH, Tile.DEFAULT_HEIGHT)

            this._super(_handler, this.texture)
        },
        collider: function (_object) {
        
        }
    })

    return GrassTile
});