define([
    'Tile', 
    'Assets'
], function(Tile, Assets) {
    'use strict';
    
    var path = 'res/gfx/tiles/'

    /**
     * World 1
     */
    const tilesWorld_1 = new Assets('tilesWordl_1', path + 'world1.png')
    tilesWorld_1.tiles = []

    //Grass
    tilesWorld_1.tiles[0] = tilesWorld_1.sheet.crop(0, 0, Tile.DEFAULT_WIDTH, Tile.DEFAULT_HEIGHT)

    //Grass2
    tilesWorld_1.tiles[1] = tilesWorld_1.sheet.crop(Tile.DEFAULT_WIDTH, 0, Tile.DEFAULT_WIDTH, Tile.DEFAULT_HEIGHT)
    
    //Include Tiles
    tilesWorld_1.tiles.forEach((tile, index) => Tile.add(index, tile))

    return Tile
});