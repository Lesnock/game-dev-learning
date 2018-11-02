define([
    'Class'
], function(Class) {
    'use strict';
    
    var GameObject = Class.extend({
        init: function(_handler, _x, _y, _width, _height) {
            this.handler = _handler
            this.x = _x
            this.y = _y
            this.width = _width
            this.height = _height
            
            Object.keys(this.components).forEach((_name) => {
                this[_name] = new (this.components[_name])(this)
            })
        },
        _super_update: function(_dt) {
            //Runs Components Update
            Object.keys(this.components).forEach((_name) => this[_name].update())
        },
        _super_render: function(_g) {
            //Runs ComponentsRender
            Object.keys(this.components).forEach((_name) => this[_name].render(_g))
        },

        //Apply the components
        make: function() {

        }
    })

    return GameObject
});