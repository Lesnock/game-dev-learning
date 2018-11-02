define([
    'Class',
], function(Class) {
    'use strict';

    var game
    
    var Handler = Class.extend({
        init: function(_game) {
            game = _game
        },
        getWidth: function() {
            return game.getWidth()
        },
        getHeight: function() {
            return game.getHeight()
        },
        getInput: function() {
            return game.getInput()
        },
    })

    return Handler
});