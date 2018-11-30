define([
    'Class',
], function(Class) {
    'use strict';
    
    var Cell = Class.extend({
        init: function (_x, _y) {
            this.x = _x
            this.y = _y
        }
    })

    return Cell
});