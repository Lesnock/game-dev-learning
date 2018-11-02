define([
    'State',
    'GameState'
], function(State, GameState) {
    'use strict';

    var handler

    var MenuState = State.extend({
        init: function(_handler) {
            this._super(_handler)
            handler = _handler
        },
        update: function(_dt) {

        },
        render: function (_g) {            
            _g.fillRect(0, 0, 50, 50)
        }
    })

    // document.addEventListener('keydown', () => {
    //     State.getState().changeTo(new GameState(handler))
    // })

    return MenuState
})