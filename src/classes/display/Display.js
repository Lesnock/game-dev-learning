define(['Class'], function(Class) {
    'use strict';

    var title, width, height, graphics, canvas
    
    var Display = Class.extend({
        init: function(_title, _width, _height) {
            title = _title
            width = _width
            height = _height
            createDisplay()
        },

        //Getters
        getTitle: () => {
            return title
        },
        getWidth: () => {
            return width
        },
        getHeight: () => {
            return height
        },
        getGraphics: () => {
            return graphics
        },
    })

    //Privates Methods
    function createDisplay() {
        document.title = title
        document.body.innerHTML = '<canvas id="display" width="' + width + '" height="'+ height +'">'
        canvas = document.getElementById('display')

        //Styles (Center Canvas)
        canvas.style.position = 'absolute'
        canvas.style.margin = 'auto'
        canvas.style.top = '0'
        canvas.style.right = '0'
        canvas.style.bottom = '0'
        canvas.style.left = '0'

        graphics = canvas.getContext('2d')
    }

    //Crop a image
    CanvasRenderingContext2D.prototype.drawByCrop = function(crop, _x, _y, _width, _height) {
        this.drawImage(crop.sheet, crop.x, crop.y, crop.width, crop.height, _x, _y, _width, _height)
    }

    //Clear the canvas
    CanvasRenderingContext2D.prototype.clear = function() {
        this.clearRect(0, 0, width, height)
    }

    return Display
});