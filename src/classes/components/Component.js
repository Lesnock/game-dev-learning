define([
    'Class',
], function(Class) {
    'use strict';
    
    var Component = Class.extend({
        init: function(_gameObject) {
            this.obj = _gameObject
        },
        update: function(_dt) {},
        render: function (_g) {}
    })

    return Component
});