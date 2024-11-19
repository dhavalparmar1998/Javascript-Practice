// console.log("file called");
var amount = 0;
var tenure = 0;
var roi = 0;

function f1(){
    // console.log("called");
    var data = document.getElementById("x1").value;
    // console.log(data);
    document.getElementById("x2").value = data;
    amount=data;
    calcuate();

}
function f2(){
    // console.log("called");
    var data = document.getElementById("x2").value;
    // console.log(data);
    document.getElementById("x1").value = data;
    amount=data;
    calcuate();

}
function f3(){
    // console.log("called");
    var data = document.getElementById("x3").value;
    // console.log("data");
    document.getElementById("x4").value = data;
    tenure = data;
    calcuate();
}
function f4(){
    // console.log("called");
    var data = document.getElementById("x4").value;
    // console.log("data");
    document.getElementById("x3").value = data;
    tenure = data;
    calcuate();
}
function f5(){
    // console.log("called");
    var data = document.getElementById("x5").value;
    // console.log(data);
    document.getElementById("x6").value = data;
    roi=data;
    calcuate();
}
function f6(){
    // console.log("called");
    var data = document.getElementById("x6").value;
    // console.log(data);
    document.getElementById("x5").value = data;
    roi=data;
    calcuate();
}
function calcuate(){
    console.log("calculate called");
    console.log(amount,roi,tenure);

    if(amount!=0 && tenure!=0 && roi!=0){
        var N = Number(12*tenure);
        var R = Number(roi/12/100);
        var P = Number(amount);

        var emi = P*R*(1+R)**N/((1+R)**N-1);
        console.log(emi);

      var totalpayable = emi * N;
      var interestpayable = totalpayable - P;
      emi = Math.round(emi);
      totalpayable = Math.round(totalpayable);
      interestpayable = Math.round(interestpayable);

      document.querySelector("#p1").innerHTML = `
      Home Loan Emi : ${emi}
      
      `
      document.querySelector("#p2").innerHTML = `
     Loan Amount : ${P}
      
      `
      document.querySelector("#p3").innerHTML = `
      Interest : ${interestpayable}
      
      `
      document.querySelector("#p4").innerHTML = `
      Total Paid Amount : ${totalpayable}
      
      `
      

    }

    // // chart

    Highcharts.chart('container', {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Home Loan'
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
        series: [{
          name: 'Percentage',
          colorByPoint: true,
          data: [{
              name: 'Loan Amount',
              y: P,
              color: "tomato"
            },
            {
              name: 'Interest Amount',
              sliced: true,
              selected: true,
              y: interestpayable,
              color: "lightblue"
            }
          ]
        }]
      });
}