async function apicall(apipath){
    var res = await fetch(apipath);
    var ans = await res.json();
    return ans;
}

const API = 'f6866ecb64af726c47ad422d7b08e283';
console.log(API);

console.log(API);
const IMGURL = 'https://image.tmdb.org/t/p/w500';
console.log(IMGURL);

const showData = function(answer){
    console.log(answer);

    document.querySelector('.all_results').innerHTML = "";

    answer && answer.forEach(val=>{
        // console.log(val);
        var{original_title,poster_path} = val;
        console.log(original_title,poster_path);
        var divtag = document.createElement('div');
        var imgtag = document.createElement('img');
        var ptag = document.createElement('p');

        imgtag.setAttribute('src', IMGURL + poster_path);
        console.log(IMGURL + poster_path);
        imgtag.className = "img-fluid";

        ptag.innerText = original_title;

        divtag.className = 'col-xl-3 col-6 text-center';
        divtag.append(imgtag,ptag);
        document.querySelector(".all_results").append(divtag);
    })
}

export {
    apicall,
    API,
    showData
}
// X-Content-Type-Options: nosniff;
