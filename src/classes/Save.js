define([
    'Class',
], function(Class) {
    'use strict';
    
    var Save = Class.extend({
        init: function() {
            
        }
    })

    Save.setLevel = function(_levelPath) {
        localStorage.setItem('level', _levelPath)
    }

    Save.getLevel = function() {
        return localStorage.getItem('level')
    }

    return Save
});