( function ( $ ) {
    "use strict";

    //line chart
    var ctx = document.getElementById( "pnl-return-chart" );
    ctx.height = 140;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "20160201", "20160202", "20160203", "20160204", "20160205", "20160206", "20160207" ],
            datasets: [
                {
                    label: "Return",
                    yAxisID: "Return",
                    borderColor: "rgba(0, 194, 146, 0.9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 194, 146, 0.4)",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [ 20, 47, 35, 43, 65, 45, 35 ]
                            },
                {
                    label: "Pnl",
                    yAxisID: "Pnl",
                    borderColor: "rgba(119,136,153, 0.9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(119,136,153, 0.5)",
                    pointHighlightStroke: "rgba(119,136,153, 1)",
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
               },
               {
                   id: 'Pnl',
                   type: 'linear',
                   position: 'right',
                   scaleLabel: {
                       display: true,
                       labelString: 'Pnl($million)',
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
            labels: [ 'Energy','Financials','Health Care','Industrials'],
            datasets: [
                {
                    label: "Sector Contribution",
                    data: [ 3.5, 8.75, 13, 9.75],
                    borderColor: "rgba(0, 194, 146, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0, 194, 146, 0.4)"
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
                                    "rgba(255,215,0,0.6)",
                                    "rgba(0,191,255,0.6)",
                                    "rgba(60,179,133,0.6)"
                                ],
                hoverBackgroundColor: [
                                    "rgba(255,0,0,0.6)",
                                    "rgba(255,215,0,0.6)",
                                    "rgba(0,191,255,0.6)",
                                    "rgba(60,179,133,0.6)"
                                ]

                            } ],
            labels: [ 'Energy','Financials','Health Care','Industrials']

        },
        options: {
            responsive: true
        }
    } );





} )( jQuery );