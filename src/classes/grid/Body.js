define([
    'Class'
], function(Class) {
    'use strict';
    
    var bodies = []

    var Body = Class.extend({
        init: function () {
            
        }
    })

    Body.add = function (_id, _body) {
        bodies[_id] = _body
    }

    return Body
});