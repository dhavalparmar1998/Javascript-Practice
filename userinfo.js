// event handler

document.querySelector(".btn").onclick = function(){
    var data1 = document.querySelector(".x1").value;
    var data2 = document.querySelector(".x2").value;

    if(data1!="" && data2!=""){
        var trtag = document.createElement("tr");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");


        td1.innerHTML = data1;
        td2.innerHTML = data2;

        var buttontag = document.createElement("button");
        buttontag.innerText="delete";
        // event listener
        buttontag.addEventListener("click",deletedata);
        // refer a function

        td3.append(buttontag);

        trtag.append(td1);
        trtag.append(td2);
        trtag.append(td3);

        document.getElementById("result").append(trtag);

        document.querySelector(".x1").value ="";
        document.querySelector(".x2").value ="";

    }
}

function deletedata(){
    console.log("test deletedata");
    console.log(this);
    console.log(this.parentNode);
    console.log(this.parentNode.parentNode);

    this.parentNode.parentNode.remove();
}