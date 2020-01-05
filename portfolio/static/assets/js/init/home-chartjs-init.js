( function ( $ ) {
    "use strict";

    //line chart
    var ctx = document.getElementById( "pnl-return-chart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "20160201", "20160202", "20160203", "20160204", "20160205", "20160206", "20160207" ],
            datasets: [
                {
                    label: "Return",
                    yAxesID: "Return",
                    borderColor: "rgba(0,0,0,.09)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0,0,0,.07)",
                    data: [ 20, 47, 35, 43, 65, 45, 35 ]
                            },
                {
                    label: "Pnl",
                    yAxesID: "Pnl",
                    borderColor: "rgba(0, 194, 146, 0.9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 194, 146, 0.5)",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [ 16, 32, 18, 27, 42, 33, 29 ]
                            }
                        ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
               xAxes: [{
                   display: true,
                   type: 'time',
                   time: {
                       parser: 'YYYYMMDD',
                       tooltipFormat: 'l1',
                       unit: 'day',
                       displayFormats: {
                           'day': 'YYYY/MM/DD'
                       }
                   }
               }],
               yAxes: [{
                   id: 'Return',
                   type: 'linear',
                   position: 'left',
                   scaleLabel: {
                       display: true,
                       labelString: 'Return(%)',
                   }
               }, {
                   id: 'Pnl',
                   type: 'linear',
                   position: 'right',
                   scaleLabel: {
                       display: true,
                       labelString: 'Pnl($)',
                   }
               }
               ],
            }

        }
    } );

    // single bar chart
    var ctx = document.getElementById( "sector-contribution-chart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: [ "s1", "s2", "s3", "s4"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [ 55, 50, 75, 80],
                    borderColor: "rgba(255, 165, 0, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(255, 165, 0, 0.5)"
                            }
                        ]
        },
        options: {
            scales: {
                yAxes: [ {
                    ticks: {
                        beginAtZero: true
                    }
                                } ]
            }
        }
    } );

    //pie chart
    var ctx = document.getElementById( "sector-distribution-chart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'pie',
        data: {
            datasets: [ {
                data: [ 45, 25, 20, 10 ],
                backgroundColor: [
                                    "rgba(255,0,0,0.6)",
                                    "rgba(232,23,19,0.6)",
                                    "rgba(185,70,56,0.6)",
                                    "rgba(162,93,74,0.6)"
                                ],
                hoverBackgroundColor: [
                                    "rgba(255,0,0,0.6)",
                                    "rgba(232,23,19,0.6)",
                                    "rgba(185,70,56,0.6)",
                                    "rgba(162,93,74,0.6)"
                                ]

                            } ],
            labels: [
                            "s1",
                            "s2",
                            "s3",
                            "s4"
                        ]
        },
        options: {
            responsive: true
        }
    } );





} )( jQuery );