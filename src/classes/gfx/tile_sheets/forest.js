define([
    'SpriteSheet'
], function(SpriteSheet) {
    'use strict';

    //Forest Sheet
    const forest = new SpriteSheet('forest', 'res/gfx/tiles/forest.png')

    //Basic Floor
    //It colides on top
    forest[0] = new Tile(forest.crop(0, 0, Tile.DEFAULT_WIDTH, Tile.DEFAULT_HEIGHT))

});