define([
    'Class',
], function(Class) {
    'use strict';
    
    var Component = Class.extend({
        init: function(_object) {
            this.obj = _object
        },
        update: function(_dt) {},
        render: function (_g) {}
    })

    return Component
});