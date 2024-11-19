document.querySelector("button").addEventListener("click",function(){
    // console.log("clicked button");

    // step-1: check XMLHttpRequest Object
    var xmlhttp = new XMLHttpRequest();

    // console.log(typeof xmlhttp);
    // console.log(xmlhttp);

    // 0- request not initialized
    // console.log(xmlhttp.readyState,xmlhttp.status);
    // this event detects the new states

    xmlhttp.onreadystatechange = function(){
        // console.log(xmlhttp.readyState,xmlhttp.status);
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            console.log("success");
            // console.log(typeof xmlhttp.responseText);
            // console.log(xmlhttp.responseText);

            var result = JSON.parse(xmlhttp.responseText);
            // console.log(result);

            result && result.length>0 && result.map(obj=>{
                console.log(obj);
                console.log(obj.name.common);
                console.log(obj.flags.png);

                var divtag = document.createElement("div");
                var imgtag = document.createElement("img");
                var h4tag = document.createElement("h4");

                divtag.className = "col";

                imgtag.src = obj.flags.png;
                h4tag.innerText = obj.name.common;

                divtag.append(imgtag);
                divtag.append(h4tag);

                document.querySelector(".row").append(divtag);
            })
        }
        else{
            console.log("failed");
        }

    }

    xmlhttp.open("get", "https://restcountries.com/v3.1/all ");
    // 1 - request in itialized and request has been setup
    xmlhttp.send();
    // 2 - request has been set to server
});