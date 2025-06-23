// ==UserScript==
// @name         gosuslugi blocked
// @namespace    http://meow.meow/
// @version      2025-06-23
// @description  meow
// @author       meow
// @match        https://lk.gosuslugi.ru/*
// @grant        none
// ==/UserScript==


const observer = new MutationObserver(mutations => {
    if (document.querySelector('.card-button > div:nth-child(2)')) {
        let card = document.querySelector('.card-button > div:nth-child(2)')
        for (let x = 0; x < card.children.length; x += 1) {
            card.children[x].querySelector('div.text-plain').innerText = "blocked"
        }
    }
});

const observerbody = new MutationObserver(mutations => {
    if (document.querySelector('.card-button > div:nth-child(2)')) {
        let card = document.querySelector('.card-button > div:nth-child(2)')
        for (let x = 0; x < card.children.length; x += 1) {
            card.children[x].querySelector('div.text-plain').innerText = "blocked"
        }
        observerbody.disconnect()
        observer.observe(document.querySelector("lk-ege.ng-star-inserted"), {
            childList: true
        });
    }
});


(function() {
    'use strict';
    observerbody.observe(document.body, {
            childList: true,
            subtree: true
        });
})();
