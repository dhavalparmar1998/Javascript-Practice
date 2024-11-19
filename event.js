// dom method - element select
console.log(document);

console.log(document.querySelector("#btn"));

// dom property- onclick
// 1st class function

document.querySelector("#btn").onclick = function(){
    console.log("hello 1");
}

document.querySelector("#btn").onclick = function(){
   var para = document.querySelector("p");

   para.innerText = `<i>Test Data</i>`;
   para.innerHTML = `<i>Test Data</i>`;
   para.style.border = "solid";
   para.style.color = "gray";

   para.className = "abc";
   para.id = "xyz";



}

////

document.getElementById("btn1").addEventListener("click",function(){
    console.log("A");

});
document.getElementById("btn1").addEventListener("click",function(){
    console.log("B");
    console.log(document.querySelectorAll("h1"));
document.querySelectorAll("h1")[0].style.display = "none";
document.querySelectorAll("h1")[1].remove();

});

