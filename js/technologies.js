var ctx1 = document.getElementById("myChart1");
var ctx2 = document.getElementById("myChart2");
var ctx3 = document.getElementById("myChart3");
var ctx4 = document.getElementById("myChart4");
// And for a doughnut chart
var myDoughnutChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
            labels: [

            ],
            datasets: [
                {
                    data: [90, 10],
                    backgroundColor: [
                        "#36A2EB",
                        "rgba(32, 150, 186, 0.1)"
                    ],
                    hoverBackgroundColor: [
                        "rgba(255, 255, 255, 0.8)",
                        "rgba(32, 150, 186, 0.1)"
                    ]
                }]
        },

});

var myDoughnutChart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
          labels: [

          ],
          datasets: [
              {
                  data: [60, 40],
                  backgroundColor: [
                      "#36A2EB",
                      "rgba(32, 150, 186, 0.1)"
                  ],
                  hoverBackgroundColor: [
                      "rgba(255, 255, 255, 0.8)",
                      "rgba(32, 150, 186, 0.1)"
                  ]
              }]
      },
});

var myDoughnutChart3 = new Chart(ctx3, {
  type: 'doughnut',
  data: {
          labels: [

          ],
          datasets: [
              {
                  data: [10, 90],
                  backgroundColor: [
                      "#36A2EB",
                      "rgba(32, 150, 186, 0.1)"
                  ],
                  hoverBackgroundColor: [
                      "rgba(255, 255, 255, 0.8)",
                      "rgba(32, 150, 186, 0.1)"
                  ]
              }]
      },
});

var myDoughnutChart4 = new Chart(ctx4, {
  type: 'doughnut',
  data: {
          labels: [

          ],
          datasets: [
              {
                  data: [90, 10],
                  backgroundColor: [
                      "#36A2EB",
                      "rgba(32, 150, 186, 0.1)"
                  ],
                  hoverBackgroundColor: [
                      "rgba(255, 255, 255, 0.8)",
                      "rgba(32, 150, 186, 0.1)"
                  ]
              }]
      },

});
