define([
    'Class',
], function(Class) {
    'use strict';

    var GameCamera = Class.extend({
        init: function (_handler, _xOffset, _yOffset) {
            this.handler = _handler
            this.xOffset = _xOffset
            this.yoffset = _yOffset
        },
        centerOnEntity: function (e) {
            this.xOffset = e.x - this.handler.getWidth()/2 + e.width/2
            this.yOffset = e.y - this.handler.getHeight()/2 + e.height/2
        },
        getxOffset: function () {
            return parseInt(this.xOffset)
        },
        getyOffset: function () {
            return parseInt(this.yOffset)
        },
        getxEnd: function () {
            return this.xOffset + this.handler.getWidth()
        },
        getyEnd: function () {
            return this.yOffset + this.handler.getHeight()
        }
    })

    return GameCamera
});