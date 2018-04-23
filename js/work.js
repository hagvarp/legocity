
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
            var chart1;
            var chart1Data;
            var chart1_last_month;

            //Chart 1 specific functions
            function drawChart1() {
                var jsonStatData = chart1Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var unemploymentdata = [];
               
                m = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
                mon = m.replace("M", "-");
                mon = new Date(mon);
                $('#unemploymentmonth').append(mon.getMonthText() + " " +  mon.getFullYear());
                arbeidsloys = ds.Data({ "month": ds.Dimension("month").id[0] }, false);
                arbeidsloys = parseFloat(Math.round(arbeidsloys * 100) / 100).toFixed(1).toString().replace(".", ",");
                $('#unemploymentnumber').append(arbeidsloys);


            }

            function loadDataAndBuildChart1() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/AM/AM02/al_pctkyn_t.px", {
                    "query": [
                        {
                            "code": "measure",
                            "selection": {
                                "filter": "item",
                                "values": [
                                    "ALPCTJ"
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
                    chart1Data = data;
                    drawChart1();
                });
            }




//---------------------------------------------------------
//                       CHART 2
//---------------------------------------------------------
            var chart2;
            var chart2Data;
            var chart2_last_month;

            //Chart 1 specific functions
            function drawChart2() {
                var jsonStatData = chart2Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var data = [];
               
                m = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
                mon = m.replace("M", "-");
                mon = new Date(mon);
                $('#employeesmonth').append(mon.getMonthText() + " " +  mon.getFullYear());
                arbeidsloys = ds.Data({ "month": ds.Dimension("month").id[0] }, false);
                arbeidsloys = numberWithCommas(arbeidsloys);
                $('#employeesnumber').append(arbeidsloys);


            }

            function loadDataAndBuildChart2() {
                POST("https://statbank.hagstova.fo/api/v1/en/H2/AM/AM03/lont_ajtr_t.px", {
                    "query": [
                        {
                            "code": "value mode",
                            "selection": {
                                "filter": "item",
                                "values": [
                                    "LT"
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
                    chart2Data = data;
                    drawChart2();
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
                
                console.log(number);
                number = parseFloat(Math.round(number * 100) / 100).toFixed(1).toString().replace(".", ",");
                number = numberWithCommas(number);
                $('#labourforcenumber').append(number);


            }

            function loadDataAndBuildChart4() {
                POST("http://statbank.hagstova.fo/api/v1/fo/H2/AM/AM01/afk_hovtol.px", {
                    "query": [
                        {
                          "code": "agegroup",
                          "selection": {
                            "filter": "item",
                            "values": [
                              "15_74"
                            ]
                          }
                        },
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
                loadDataAndBuildChart1();
                loadDataAndBuildChart2();
                loadDataAndBuildChart3();
                loadDataAndBuildChart4();

            });            
