// ==UserScript==
// @name         e.otrada.ru
// @namespace    http://aqendo.nl/
// @version      0.1
// @description  shut them up
// @author       Aqendo
// @match        https://e.otruda.ru/*
// @icon         https://e.otruda.ru/static/v2/skins/ru/otruda/common/res/favicon.ico
// @grant        none
// ==/UserScript==
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async function() {
    'use strict';
    let body = document.querySelector("body")
    while (true) {
        if (body.style.overflow == "hidden") {
            body.style.overflow = "auto"
        }
        let c = document.querySelector("div[class='']")
        if (c) {
            c.remove()
            break
        }
        await sleep(1000)
    }
})();
