// ==UserScript==
// @name         AWS SSO Fix
// @namespace    https://github.com/honkyjive/
// @version      0.1
// @description  try to take over the world!
// @author       Erick Gallegos
// @match        https://console.aws.amazon.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var elms = document.getElementsByTagName("*"),
        len = elms.length;
    for(var ii = 0; ii < len; ii++) {
        var myChildred = elms[ii].childNodes;
        var len2 = myChildred.length;
        for (var jj = 0; jj < len2; jj++) {
            if(myChildred[jj].nodeType === 3) {
                if (myChildred[jj].nodeValue.includes("AWSReservedSSO_")){
                    myChildred[jj].nodeValue = myChildred[jj].nodeValue.split('_')[1];
                }
            }
        }
    }



})();