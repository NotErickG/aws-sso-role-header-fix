// ==UserScript==
// @name         AWS SSO Fix
// @namespace    https://github.com/honkyjive/
// @version      0.1
// @description  try to take over the world!
// @author       Erick Gallegos, Chris Ward
// @match        https://console.aws.amazon.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var value;
    const accountNameMap = new Map();
    // TODO - Add each account, and its alias that you would want to have displayed next to the role name
    accountNameMap.set('123456789123', 'my-account');

    const elms = document.getElementsByTagName("*");
    const accountId = document.querySelectorAll("[data-testid='aws-my-account-details']")[0].innerText;
    let len = elms.length;

    for(let ii = 0; ii < len; ii++) {
        let myChildren = elms[ii].childNodes;
        let len2 = myChildren.length;
        for (let jj = 0; jj < len2; jj++) {
            if(myChildren[jj].nodeType === 3) {
                if (myChildren[jj].nodeValue.includes("AWSReservedSSO_")){
                    myChildren[jj].nodeValue = `${myChildren[jj].nodeValue.split('_')[1]} - ${accountNameMap.get(accountId)}`;
                }
            }
        }
    }
})();
