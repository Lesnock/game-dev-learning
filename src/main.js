requirejs.config({
    baseUrl: 'src/',
    paths: {
        //Classes
        Assets: 'classes/gfx/Assets',
        Component: 'classes/components/Component',
        Creature: 'classes/game_objects/creatures/Creature',
        Display: 'classes/display/Display',
        Game: 'classes/Game',
        GameObject: 'classes/game_objects/GameObject',
        GameState: 'classes/states/GameState',
        Handler: 'classes/Handler',
        ImageLoader: 'classes/gfx/ImageLoader',
        Input: 'classes/inputs/Input',
        Launcher: 'classes/Launcher',
        Level: 'classes/levels/Level',
        MapRegister: 'classes/MapRegister',
        MenuState: 'classes/states/MenuState',
        Player: 'classes/game_objects/Player',
        Rigidbody: 'classes/components/Rigidbody',
        Save: 'classes/Save',
        SpriteSheet: 'classes/gfx/SpriteSheet',
        State: 'classes/states/State',

        //Tiles
        Tile: 'classes/tiles/Tile',
        Tiles: 'classes/tiles',
        GrassTile: 'classes/tiles/world1/GrassTile',

        //Libs
        Class: 'vendor/Class',
    }
})

requirejs(['Launcher'], function(Launcher) {
    var Launcher = new Launcher("Game", 1024, 576)
})