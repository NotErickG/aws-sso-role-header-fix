// ==UserScript==
// @name         AWS SSO Fix
// @namespace    https://github.com/honkyjive/
// @version      0.1
// @description  try to take over the world!
// @author       Erick Gallegos, Chris Ward
// @match        https://console.aws.amazon.com/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var value;
    const accountNameMap = new Map();
    // TODO - Add each account, and its alias that you would want to have displayed next to the role name
    accountNameMap.set('123456789123', 'my-account');
    
    $('*:contains("AWSReservedSSO_")').each(function(){
        // Find AWS Account ID
        const accountId = document.querySelectorAll("[data-testid='aws-my-account-details']")[0].innerText;
        if($(this).children().length < 1) {
            value = `${$(this).text().split('_')[1]} - ${accountNameMap.get(accountId)}`;
            $(this).text(value);
        }
    })

})();
