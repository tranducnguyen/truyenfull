// ==UserScript==
// @name         Remove ads Truyen full
// @namespace    http://tampermonkey.net/
// @version      2024-01-20
// @description  try to take over the world!
// @author       You
// @match        https://truyenfull.vn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=truyenfull.vn
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
    // Your code to be executed on page load goes here
    console.log('Page loaded!');
    function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    async function removeEle(myEle){
        let isRemoved=false;
        for(let i =0;i<3;i++){
            if(isRemoved){return;}

            if(myEle){
                myEle.remove();
                isRemoved=true;
            }else{
                await sleep(200);
            }
        }
    }

    async function removeEles(myEle){
        let isRemoved=false;
        for(let i =0;i<3;i++){
            if(isRemoved){return;}

            if(myEle){
                for(let j=0;j<myEle.lengh;j++){
                    myEle[j].remove();
                    isRemoved=true;
                }
            }else{
                await sleep(200);
            }
        }
    }

    var arrLog = [];
    var arrEleID = ['ads-chapter-nettruyenfull','shoppe_ads_fly','ads-chapter-google-bottom','ads-chapter-bottom-lien-quan'];
    var arrEleClass = ['ads-mobile','ads-network', 'ads-desktop'];

    for(let k =0;k<3;k++){
        for (let i = 0; i < arrEleID.length; i++) {
            let adsElement = document.getElementById(arrEleID[i]);
            if (adsElement) { adsElement.remove(); arrLog.push(adsElement.className); }
        }


        for (let i = 0; i < arrEleClass.length; i++) {
            let adsElement = document.getElementsByClassName(arrEleClass[i]);
            if (adsElement) {
                let times = 0;
                for(let i =0;i<adsElement.length;i++){
                    if(adsElement[i]){
                        times++;
                        adsElement[i].remove();
                    }
                }
                arrLog.push(`${arrEleClass[i]} ${adsElement.length} ${times}`);
            }
        }
        await sleep(300);
    }
    console.log(`Removed ${arrLog.join(',')}` )

})();