define([
    'GameObject',
    'Assets',
    'Rigidbody'
], function(GameObject, Assets, Rigidbody) {
    'use strict';
    
    var width = 64, height = 64, speed = 200

    var Player = GameObject.extend({
        //Components
        components: {
            Rigidbody
        },

        //Constructor
        init: function(_handler, _x, _y) {
            this._super(_handler, _x, _y, width, height)
            this.speed = speed

            //Asset
            this.asset = new Assets('player', 'res/gfx/player.png')
            this.asset.idle = this.asset.sheet.crop(0, 0, width, height)
        },
        update: function(_dt) {
            if (this.handler.getInput().controller == 'keyboard') {
                this.keyboardController(_dt)
            }
        },
        render: function(_g) {
            _g.drawByCrop(this.asset.idle, this.x, this.y, width, height)
        },
        //Controllers for keyboards
        keyboardController: function (_dt)
        {
            if (this.handler.getInput().up) {
                this.y -= this.speed * _dt
            }
            if (this.handler.getInput().down) {
                this.y += this.speed * _dt
            }
            if (this.handler.getInput().right) {
                this.x += this.speed * _dt
            }
            if (this.handler.getInput().left) {
                this.x -= this.speed * _dt
            }
        }
    })

    return Player
});