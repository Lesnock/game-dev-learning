define([
    'Class'
], function(Class) {
    'use strict';

    var current = null
    var transition = false
    
    var State = Class.extend({
        init: function(_handler) {
            this.handler = _handler
            this.input = _handler.getInput()
        },
        changeTo: function(_state) {
            transition = true
            setTimeout(() => {
                State.setState(_state)
                transition = false
            }, 500)
        },
        _super_update: function(_dt) {

        },
        _super_render: function (_g) {
            if (transition) {
                _g.fillRect(300, 400, 100, 100)
            }
        }
    })

    State.getState = function() {
        return current
    }

    State.setState = function(_state) {
        current = _state
    }

    return State
});