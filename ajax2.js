"use strict";

document.getElementById("btn").addEventListener("click",searchvalue);
var productdiv = document.querySelector(".products");

function searchvalue(){
    // console.log(test);
    var record = document.getElementById("categorydata").value;
    // console.log(record);

    if(record == ""){
        productdiv.innerHTML = `Category Name Required !!`;
        productdiv.style.color = "tomato";
        productdiv.style.fontsize = "20px";
    }
    else{
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function(){
            console.log(xmlhttp.readyState, xmlhttp.status);
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                var result = JSON.parse(xmlhttp.responseText);
                console.log(result);

                if(result.length==0){
                    productdiv.innerHTML = "No Products Found"
                }
                else{
                    productdiv.innerHTML = "";

                    result.forEach((value)=>{
                        var{title,price,image} = value;
                        var ptag = document.createElement("p");
                        var imgtag = document.createElement("img");
                        var h2tag = document.createElement("h2");

                        imgtag.src = image;
                        imgtag.style.width = "100%";
                        ptag.innerHTML = title;
                        h2tag.innerHTML = price;

                        var divtag = document.createElement("div");
                        divtag.style.width = "25%";

                        divtag.append(imgtag);
                        divtag.append(h2tag);
                        divtag.append(ptag);

                        productdiv.append(divtag);


                       

                    })
                }
            }
        }
        var apipath = `https://fakestoreapi.com/products/category/${record}`
        xmlhttp.open("get",apipath);
        xmlhttp.send();

    }
}