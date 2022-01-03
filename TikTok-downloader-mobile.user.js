// ==UserScript==
// @name         TikTok mobile download addon
// @namespace    https://github.com/Knuspie/TikTok-mobile-downloader
// @version      1.7
// @description  An addon which allows you to download your tiktoks easelly
// @author       Knuspie
// @match        https://www.tiktok.com/*
// @icon         https://www.google.com/s2/favicons?domain=tiktok.com
// @grant        none
// ==/UserScript==
'use strict'
function main() {
  document.head.insertAdjacentHTML('afterbegin', '<style>.cookie-banner,.footer-guide,.backdrop-12,.backdrop-11,.backdrop-10,.backdrop-9,.backdrop-8,.backdrop-7,.backdrop-6,.backdrop-5,.backdrop-4,.backdrop-3,.backdrop-2,.backdrop-1,.backdrop-0{display:none!important}.tiktok-bottom.bottom{bottom:0px!important}</style>');
  setInterval(function() { check(); }, 500);
  function check() {
    try {checkShare();}
    finally {checkSideBar();}
  }
  function checkShare() {
    if(document.getElementById("tiktok-share").innerHTML != "") {
      if(document.getElementById("download") == null) {
        document.querySelector("div.share-inner-wrapper").insertAdjacentHTML('afterbegin', '<div id="download" class="jsx-250651873 platwrap"><div class="jsx-250651873 platicon"><svg width="44" height="44" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><path fill="#FE2C55" fill-rule="evenodd" clip-rule="evenodd" d="M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0Zm10.9,49.72a3.63,3.63,0,1,1,5.09,5.18L63.63,68.53a3.64,3.64,0,0,1-5.1,0L44.93,55.1A3.63,3.63,0,0,1,50,49.91l7.49,7.42.08-26.13a3.64,3.64,0,0,1,7.27.06l-.08,25.93,7.56-7.47ZM32.5,83.09l0-14.22a3.64,3.64,0,0,1,7.27.07l0,10.35q21.66,0,43.3,0l0-10.42a3.64,3.64,0,1,1,7.27.07l0,14.15h0a3.64,3.64,0,0,1-3.6,3.47q-25.32,0-50.59,0a3.63,3.63,0,0,1-3.6-3.47Z"/></svg></div><span class="jsx-250651873"> Download</span></div>');
      }
      document.getElementById("download").onclick = function() {
        const link = document.createElement("a");
        link.href = document.querySelector(".swiper-slide-active").querySelector("video").src;
        link.target = "_blank";
        link.click();
      }
    }
  }
  function checkSideBar() {
    if(document.querySelector(".side-bar-mobile-container") != null) {
      if(document.getElementById("credit") == null) {
        document.querySelector("div.bottom-wrapper").getElementsByTagName("div")[1].insertAdjacentHTML('beforeend', '<span style="display: block;" id="credit"><a class="item-sub-column" target="_blank" href="https://github.com/Knuspie/TikTok-mobile-downloader"><h5>Addon</h5></a></span>');
      }
    }
  }
}
main()
