// ==UserScript==
// @name         edu.tatar.ru fixer
// @namespace    http://aqendo.nl/
// @version      0.1
// @description  фиксит отображение оценок
// @author       You
// @match        https://edu.tatar.ru/user/diary/wee*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector("tbody").children[0].children[0].rowSpan = 8;
})();
