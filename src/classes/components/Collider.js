define([
    'Component'
], function(Component) {
    'use strict';
    
    var Collider = Component.extend({
        init: function (_obj) {
            this._super(_obj)
        },
        update: function () {
            
        },
        action: function () {
            console.log('Action!')
        }
    })

    Collider.bitmap = []

    return Collider
});