define([
    'State',
    'Player',
    'Level',
    'Save'
], function(State, Player, Level, Save) {
    'use strict';

    var GameState = State.extend({
        init: function(_handler) {
            this._super(_handler)
            this.player = new Player(_handler, 10, 10)

            this.level = (!Save.getLevel()) 
                        ? new Level('res/levels/level1.lvl', _handler)
                        : new Level(Save.getLevel())            
        },
        update: function(_dt) {
            this.level.update(_dt)

            this.player._super_update(_dt)
            this.player.update(_dt)
        },
        render: function (_g) {
            this.level.render(_g)

            this.player._super_render(_g)
            this.player.render(_g)
        }
    })

    return GameState
})