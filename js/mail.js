
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

                console.log(number);


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
                number = numberWithCommas(number);

                number = parseFloat(Math.round(number * 100) / 100).toFixed(1).toString().replace(".", ",");

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
            var chart3;
            var chart3Data;
            var chart3_last_month;

            //Chart 1 specific functions
            function drawChart3() {
                var jsonStatData = chart3Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var data = [];
               
                m = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
                mon = m.replace("M", "-");
                mon = new Date(mon);
                $('#wageearningmonth').append(mon.getMonthText() + " " +  mon.getFullYear());
                arbeidsloys = ds.Data({ "month": ds.Dimension("month").id[0] }, false);
                arbeidsloys = parseFloat(Math.round(arbeidsloys * 100) / 100000).toFixed(0).toString().replace(".", ",");
                $('#wageearningnumber').append(arbeidsloys);


            }

            function loadDataAndBuildChart3() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/AM/AM04/lon_ajtrmd_t.px", {
                    "query": [
                        {
                            "code": "value mode",
                            "selection": {
                                "filter": "item",
                                "values": [
                                    "WA"
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
                    chart3Data = data;
                    drawChart3();
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
                loadDataAndBuildChart3();
                loadDataAndBuildChart4();

            });            
