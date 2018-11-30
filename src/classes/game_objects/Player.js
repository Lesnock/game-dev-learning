define([
    'GameObject',
    'SpriteSheet',
    'Rigidbody', 
    'Collider'
], function(GameObject, SpriteSheet, Rigidbody, Collider) {
    'use strict';
    
    var width = 64, height = 64, speed = 200

    var Player = GameObject.extend({
        //Components
        components: {
            Rigidbody,
            Collider
        },

        //Constructor
        init: function(_handler, _x, _y) {
            this._super(_handler, _x, _y, width, height)
            this.speed = speed

            //SpriteSheet
            this.sheet = new SpriteSheet('player', 'res/gfx/player.png')
            this.sheet.idle = this.sheet.crop(0, 0, width, height)
        },
        update: function(_dt) {
            if (this.handler.getInput().controller == 'keyboard') {
                this.keyboardController(_dt)
            }

            this.handler.getGameCamera().centerOnEntity(this)
        },
        render: function(_g) {
            _g.drawByCrop(this.sheet.idle, this.x - this.handler.getGameCamera().getxOffset(), this.y - this.handler.getGameCamera().getyOffset(), width, height)
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