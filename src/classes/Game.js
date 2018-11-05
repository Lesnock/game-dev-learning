define(['Class','Display', 'State', 'GameState', 'Input', 'Handler'], function(Class, Display, State, InitalState, Input, Handler) {
    'use strict';

    var title, width, height, g, display, input, handler

    var initialState

    const fps = 30
    var running = false
    
    var Game = Class.extend({
        init: function(_title, _width, _height) {
            title = _title
            width = _width
            height = _height
            input = new Input()
            handler = new Handler(this)
        },
        run: function() {
            init()
        },
        start: function() {
            if (running) return
            running = true
            this.run()
        },
        run: function() {
            init()
            const timePerTick = 1000/fps
            let delta = 0
            let now
            let lastTime = Date.now()
            let timer = 0

            function loop() {
                if (running) {
                    now = Date.now()
                    delta = now - lastTime
                    timer += delta
                    lastTime = now

                    if (timer >= timePerTick) {
                        //timer as second
                        var dt = timer/1000
                        update(dt)
                        render()
                        timer = 0
                    }
                }
                window.requestAnimationFrame(loop)
            }
            loop()
        },
        //Getters
        getWidth: function() {
            return width
        },
        getHeight: function() {
            return height
        },
        getInput: function() {
            return input
        },
    })

    Game.getHandler = function() {
        return handler
    }

    //Static Methods
    function init() {
        display = new Display(title, width, height)
        g = display.getGraphics()
        initialState = new InitalState(handler)
        State.setState(initialState)
    }

    function update(_dt) {
        if (State.getState()) {
            State.getState()._super_update(_dt)
            State.getState().update(_dt)
        }

        //Inputs
        input.update()
    }

    function render() {
        g.clear()

        if (State.getState()) {
            State.getState()._super_render(g)
            State.getState().render(g)
        }
    }

    return Game
});