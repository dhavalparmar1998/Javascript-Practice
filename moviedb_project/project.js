"use strict";

import {apicall,API,showData} from './function.js';

console.log(API);
// console.log(typeof apicall);
// console.log(document.querySelectorAll('.links_movie'));
document.querySelectorAll('.links_movie').forEach((atag)=>{
    // console.log(atag);
    atag.addEventListener("click", myfunctions);
})

function myfunctions(ev){
    // console.log(ev);
    ev.preventDefault();
    // console.log(Math.random());
    // console.log(this);
    // console.log(this.getAttribute("for"));

    var type = this.getAttribute('for')
    var apiPath = `https://api.themoviedb.org/3/movie/${type}?api_key=${API}&language=en-US&page=1`;

    // https://api.themoviedb.org/3/movie/${type}?api_key=${API}&language=en-US&page=1

    console.log(apiPath);
    apicall(apiPath)
    .then(val=>{
        console.log(val);
        console.log(val.results);
        showData(val.results);
    })
    
}

document.getElementById('formData').onsubmit=function(ev){
    ev.preventDefault();
    var data = document.getElementById('search_data').value;
    var apiPath = `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${data}&page=1`;
    console.log(apiPath);
    apicall(apiPath)
    .then(val=>{
        console.log(val);
        console.log(val.results);
        showData(val.results);
    })
}
