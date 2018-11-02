define([
    'Class',
], function(Class) {
    'use strict';

    var keys = []
   
    var Input = Class.extend({
        init: function() {
            this.controller = 'keyboard'
        },
        update: function() {
            this.up = keys[87]
            this.down = keys[83]
            this.left = keys[65]
            this.right = keys[68]
            this.jump = keys[32]
        }
    })

    //Listeners
    window.onkeydown = function (e) {
        keys[e.keyCode] = true
    }

    window.onkeyup = function (e) {
        keys[e.keyCode] = false
    }

    return Input
});