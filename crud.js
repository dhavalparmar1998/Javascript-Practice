"use strict";
var students = [
    {name:"student 1",roll:10,division:"A"},
    {name:"student 2",roll:11,division:"A"},
    {name:"student 3",roll:12,division:"B"},
    {name:"student 4",roll:13,division:"B"},
];
// /

console.log(document.getElementById("result"));
var tbody = document.getElementById("result");

function showdata(){
// short circuit operator
    students && students.length>0 && students.forEach((value,i)=>{
        // console.log(value,i);
        var{name,roll,division} = value;
        // console.log(name);
        // console.log(role);
        // console.log(division);

        var trtag = document.createElement("tr");
        console.log(trtag);
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");

        // console.log(td1);
        // console.log(td2);
        // console.log(td3);

        td1.innerText = name;
        td2.innerText = division;
        td3.innerText = roll;

        trtag.append(td1);
        trtag.append(td2);
        trtag.append(td3);
        trtag.append(td4);
        trtag.append(td5);

        var btn = document.createElement("button");
        btn.innerText = "X";
        btn.addEventListener("click",deleterecord);
        td4.append(btn);

        var btn2 = document.createElement("button");
        btn2.innerText = "Edit";
        btn2.addEventListener("click",editrecord);
        td5.append(btn2);




        tbody.append(trtag);



    })
}

showdata();

document.querySelector(".add").onclick = function(){
    // alert();
    var data = document.querySelectorAll("#userinfo");
    var data1 = data[0].value;
    var data2 = data[1].value;
    var data3 = data[2].value;

    console.log(data1,data2,data3);

    var dataset = {name:data1,roll:data3,division:data2}
    console.log(dataset);
    console.log(students);

    students.push(dataset);
    console.log(students);
    tbody.innerHTML = "";
    
    
    showdata();
    
   data[0].value = "";
   data[1].value = "";
   data[2].value = "";                                                                              


}

function deleterecord(){
    console.log(this);
    // DOM traverse or DOM navigation property: parentnode
    this.parentNode.parentNode.remove();
}
var rowindex = 0;

function editrecord(){
    console.log(this);
    console.log(this.parentNode.parentNode);
   var trdata =  this.parentNode.parentNode;
   console.log(trdata.children[0]);
   console.log(trdata.children[0].innerText);
   console.log(trdata.children[1]);
   console.log(trdata.children[1].innerText);
   console.log(trdata.children[2]);
   console.log(trdata.children[2].innerText);

   var data = document.querySelectorAll("#userinfo");

   data[0].value = trdata.children[0].innerText;
   data[1].value = trdata.children[1].innerText;
   data[2].value = trdata.children[2].innerText;

   document.querySelector(".add").style.display = "none";
   document.querySelector(".update").style.display = "block";

   rowindex = this.parentNode.parentNode.rowIndex;
   console.log(rowindex);
}
document.querySelector(".update").onclick = function(){
    var data = document.querySelectorAll("#userinfo");
    console.log(data);
    console.log( data[0].value);
    console.log(data[1].value);
    console.log(data[2].value);
   
   console.log(rowindex);
   console.log(document.querySelector("tbody").children);
   console.log(document.querySelector("tbody").children[rowindex-1]);

   var trtag = document.querySelector("tbody").children[rowindex-1];
   console.log(trtag);

   trtag.children[0].innerText = data[0].value;
   trtag.children[1].innerText = data[1].value;
   trtag.children[2].innerText = data[2].value;

   document.querySelector(".update").style.display = "none";
   document.querySelector(".add").style.display = "block";

   data[0].value = "";
   data[1].value = "";
   data[2].value = "";
}