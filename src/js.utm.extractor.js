/**
 * JavaScript Utm Extractor v0.1.0
 * https://github.com/ertrade/js-utm-extractor
 *
 * Copyright JSC ERTrade, 2016
 * Released under the MIT license
 */
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var _OldUtmExtractor = window.UtmExtractor;
        var api = window.UtmExtractor = factory();
        api.noConflict = function () {
            window.UtmExtractor = _OldUtmExtractor;
            return api;
        };
    }
}(function () {
    'use strict';

    var api = function(source) {

        if (arguments.length < 1 && (typeof location !== 'undefined')) {
            source = location.search;
        }

        var utm_labels = {};

        var parts = source.substr(1).split('&');
        var length = parts.length;
        var i = 0;

        for (; i < length; ++i) {
            var item = parts[i];
            if (item && /^utm_/.test(item)) {
                var tmp = item.split('=');
                utm_labels[tmp[0]] = decodeURIComponent(tmp[1]);
            }
        }

        return utm_labels;
    };

    api.extract = api;

    return api;

}));
