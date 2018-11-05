define([
    'Tile',
    'Assets',
    'Rigidbody'
], function(Tile, Assets, Rigidbody) {
    'use strict';
    
    var GrassTile = Tile.extend({
        components: {
            Rigidbody
        },

        init: function() {
            this.assets = Assets.getAsset('tilesWordl_1')
            this.texture = this.assets.sheet.crop(64, 0, Tile.DEFAULT_WIDTH, Tile.DEFAULT_HEIGHT)

            this._super(this.texture)
        }
    })

    return GrassTile
});