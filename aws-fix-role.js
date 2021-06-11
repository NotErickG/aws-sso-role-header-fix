// ==UserScript==
// @name         AWS SSO Fix
// @namespace    https://github.com/honkyjive/
// @version      0.1
// @description  try to take over the world!
// @author       Erick Gallegos
// @match        https://console.aws.amazon.com/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var value;
    $('*:contains("AWSReservedSSO_")').each(function(){
        if($(this).children().length < 1) {
            value = $(this).text().split('_')[1];
            $(this).text(value);
        }
    })


})();