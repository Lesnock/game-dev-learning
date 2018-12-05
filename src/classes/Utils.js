define(['jquery'], function($) {
    'use strict';
    
    var Utils = {}

    Utils.loadFileAsString = function(_path) {
        let string = ''
        
        $.ajax({
            url: _path,
            type: "GET",
            async: false,
            success: function (content) {
                string = content
            },
            error: function () {
                alert('Utils.js says: \nFile ' + _path + ' could not be loaded')
            }
        })

        return string
    }

    Utils.loadJS = function (_path) {
        return import ('./' + _path)
    }

    return Utils
});