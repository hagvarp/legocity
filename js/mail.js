
Date.prototype.getMonthText = function() {
  var months = ['Januar', 'Februar', 'Mars', 'Apríl', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'];
  return months[this.getMonth()];
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


//---------------------------------------------------------
//                       CHART 1
//---------------------------------------------------------
            var chart61;
            var chart61Data;
            var chart61_last_month;

            //Chart 1 specific functions
            function drawChart61() {
                var jsonStatData = chart61Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;                

                $('#mailmonth').append(m);
                number = ds.Data({ "year": ds.Dimension("year").id[0] }, false);
                number = parseFloat(Math.round(number * 100) / 100000).toFixed(1).toString().replace(".", ",");
                number = numberWithCommas(number);
                $('#mailnumber').append(number);


            }

            function loadDataAndBuildChart61() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/SS/SS02/tele_post.px", {
                    "query": [
                        {
                          "code": "activity",
                          "selection": {
                            "filter": "item",
                            "values": [
                              "LETTERS"
                            ]
                          }
                        },
                        {
                            "code": "year",
                            "selection": {
                                "filter": "top",
                                "values": [
                                    "1"
                                ]
                            }
                        }                  



                    ],
                    "response": {
                        "format": "json-stat"
                    }
                }, function(data) {
                    chart61Data = data;
                    drawChart61();
                });
            }




//---------------------------------------------------------
//                       CHART 2
//---------------------------------------------------------
            var chart62;
            var chart62Data;
            var chart62_last_month;

            //Chart 1 specific functions
            function drawChart62() {
                var jsonStatData = chart62Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var data = [];
               
                m = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
                mon = m.replace("M", "-");
                mon = new Date(mon);
                $('#foodmonth').append(mon.getMonthText() + " " +  mon.getFullYear());
                number = ds.Data({ "month": ds.Dimension("month").id[0] }, false);
                

                number = parseFloat(Math.round(number * 100) / 100000).toFixed(1).toString().replace(".", ",");

                $('#foodnumber').append(number);


            }

            function loadDataAndBuildChart62() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/UH/UH01/uh_innbec_t.px", {
                    "query": [
                        {
                          "code": "BEC-groups",
                          "selection": {
                            "filter": "item",
                            "values": [
                              "8_47"
                            ]
                          }
                        },
                        {
                          "code": "country of origin",
                          "selection": {
                            "filter": "item",
                            "values": [
                              "999"
                            ]
                          }
                        },
                        {
                            "code": "month",
                            "selection": {
                                "filter": "top",
                                "values": [
                                    "1"
                                ]
                            }
                        },                  



                    ],
                    "response": {
                        "format": "json-stat"
                    }
                }, function(data) {
                    chart62Data = data;
                    drawChart62();
                });
            }





//---------------------------------------------------------
//                       CHART 3
//---------------------------------------------------------
            var chart63;
            var chart63Data;
            var chart63_last_month;

            //Chart 1 specific functions
            function drawChart63() {
                var jsonStatData = chart63Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                year = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;                

                number = ds.Data({ "year": ds.Dimension("year").id[0] }, false).filter(function(n) { return n; });
                mon = ds.Dimension("quarters").id[number.length-1];

                number = ds.Data({ "year": ds.Dimension("year").id[0], "quarters": ds.Dimension("quarters").id[number.length - 1] }, false);


                number = parseFloat(Math.round(number * 100) / 100).toFixed(0).toString().replace(".", ",");
                number = numberWithCommas(number);

                $('#handilmonth').append(mon + " " +  year);
                $('#handilnumber').append(number);


            }

            function loadDataAndBuildChart63() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/VV/VV05/handil_mvg.px", {
                    "query": [
    {
      "code": "commodity groups",
      "selection": {
        "filter": "item",
        "values": [
          "10_CUR"
        ]
      }
    },
    {
      "code": "year",
      "selection": {
        "filter": "top",
        "values": [
          "1"
        ]
      }
    },
    {
      "code": "quarters",
      "selection": {
        "filter": "item",
        "values": [
          "Q01",
          "Q02",
          "QO3",
          "QO4"
        ]
      }
    }               



                    ],
                    "response": {
                        "format": "json-stat"
                    }
                }, function(data) {
                    chart63Data = data;
                    drawChart63();
                });
            }



//---------------------------------------------------------
//                       CHART 4
//---------------------------------------------------------
            var chart4;
            var chart4Data;
            var chart4_last_month;

            //Chart 21 specific functions
            function drawChart4() {
                var jsonStatData = chart4Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
               
               m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;                

                $('#labourforcemonth').append(m);
                number = ds.Data({ "year": ds.Dimension("year").id[0] }, false);
                number = parseFloat(Math.round(number * 100) / 100).toFixed(1).toString().replace(".", ",");
                number = numberWithCommas(number);
                $('#labourforcenumber').append(number);


            }

            function loadDataAndBuildChart4() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/AM/AM01/afk_hovtol.px", {
                    "query": [
                        {
                          "code": "main figures",
                          "selection": {
                            "filter": "item",
                            "values": [
                              "VP"
                            ]
                          }
                        },
                        {
                            "code": "year",
                            "selection": {
                                "filter": "top",
                                "values": [
                                    "1"
                                ]
                            }
                        }                  

                    ],
                    "response": {
                        "format": "json-stat"
                    }
                }, function(data) {
                    chart4Data = data;
                    drawChart4();
                });
            }






            //HELPER FUNCTION
            function POST(url, query, main) {
                $.ajax({
                    type: "POST",
                    url: url,
                    data: JSON.stringify(query),
                    success: function(data) {
                        main(data);
                    }
                });
            }

            //START LOADING AND BUILDING CHARTS
            $(function () {
                loadDataAndBuildChart61();
                loadDataAndBuildChart62();
                loadDataAndBuildChart63();
                loadDataAndBuildChart4();

            });            
