// event handling in js

document.getElementById("btn").onclick = function(){
    document.getElementById("result").innerHTML = "";

    var data1 = document.getElementById("x1").value;
    var data2 = document.getElementById("x2").value;
    var data3 = document.getElementById("x3").value;

    console.log((data1), isNaN(data1));
    console.log(data2);
    console.log(data3, typeof data3);

    var message = "";
    if(data1 == "" || data2 == "" || data3 == ""){
        message = "All Values Are Required"
    }
    else if(isNaN(data1) || isNaN(data2) || isNaN(data3)){
        message = "values must be a number"
    }
    else if(data1<0 || data2<0 || data3<0){
        message = "Values must be above zero"
    }
    else{
        message = "";
        var amount = +data1;
        var roi = +data2;
        var duration = +data3;

        var year = 1;
        var openingbalance = 0;
        while(year<=duration){
            var interest = (openingbalance+amount)*roi/100;
            interest = Math.round(interest);

            var closingbalance = openingbalance+amount+interest;
            console.log(year,openingbalance,amount,interest,closingbalance);

            var trtag = document.createElement("tr");
            console.log(trtag, typeof trtag);

            var td1 = document.createElement("td");
            console.log(td1, typeof td1);
            var td2 = document.createElement("td");
            console.log(td2, typeof td2);
            var td3 = document.createElement("td");
            console.log(td3, typeof td3);
            var td4 = document.createElement("td");
            console.log(td4, typeof td4);
            var td5 = document.createElement("td");
            console.log(td5, typeof td5);


            td1.innerText = year;
            td2.innerText = openingbalance;
            td3.innerText = amount*year;
            td4.innerText = interest;
            td5.innerText = closingbalance;

            trtag.append(td1);
            trtag.append(td2);
            trtag.append(td3);
            trtag.append(td4);
            trtag.append(td5);

            document.getElementById("result").append(trtag);
            year++;
            openingbalance=closingbalance

        }
    }

    document.querySelector("p").innerHTML = message;
    
    // charts

    Highcharts.chart('container', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'PPF Calculator'
        },
        tooltip: {
            valueSuffix: '%'
        },
       
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series: [
            {
                name: 'Percentage',
                colorByPoint: true,
                data: [
                    {
                        name: 'Amount',
                        y: amount,
                        color:"tomato"
                    },
                    {
                        name: 'Interest Amount',
                        sliced: true,
                        selected: true,
                        y: interest,
                        color:"lightblue"
                    }
                ]
            }
        ]
    });
    
}

