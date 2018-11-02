define([
    'Class',
], function(Class) {
    'use strict';
    
    var Component = Class.extend({
        init: function(_gameObject) {
            this.gameObject = _gameObject
        },
        update: function(_dt) {},
        render: function (_g) {}
    })

    return Component
});