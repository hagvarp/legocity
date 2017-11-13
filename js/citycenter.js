
Date.prototype.getMonthText = function() {
  var months = ['Januar', 'Februar', 'Mars', 'Apríl', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'];
  return months[this.getMonth()];
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}



//---------------------------------------------------------
//                       CHART 71
//---------------------------------------------------------
            var chart71;
            var chart71Data;
            var chart71_last_month;


            //Chart 1 specific functions
            function drawChart71() {
                var jsonStatData = chart71Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var unemploymentdata = [];
               
                m = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
                mon = m.replace("M", "-");
                mon = new Date(mon);
                $('#fuelmonth').append(mon.getMonthText() + " " +  mon.getFullYear());
                arbeidsloys = ds.Data({ "month": ds.Dimension("month").id[0] }, false);
                arbeidsloys = parseFloat(Math.round(arbeidsloys * 100) / 100000).toFixed(1).toString().replace(".", ",");
                $('#fuelnumber').append(arbeidsloys);


            }
            function loadDataAndBuildChart71() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/UH/UH01/uh_innbec_t.px", {
                    "query": [
                        {
                            "code": "BEC-groups",
                            "selection": {
                                "filter": "item",
                                "values": [
                                    "5"
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
                        }             

                    ],
                    "response": {
                        "format": "json-stat"
                    }
                }, function(data) {
                    chart71Data = data;
                    drawChart71();
                });
            }




//---------------------------------------------------------
//                       CHART 2
//---------------------------------------------------------
            var chart72;
            var chart72Data;
            var chart72_last_month;

            //Chart 2 specific functions
            function drawChart72() {
                var jsonStatData = chart72Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data

               m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;                

                $('#vehiclesmonth').append(m.toLowerCase());
                number = ds.Data({ "year": ds.Dimension("year").id[0] }, false);
                number = parseFloat(Math.round(number * 100) / 100).toFixed(0).toString().replace(".", ",");
                number = numberWithCommas(number);
                $('#vehiclesnumber').append(number);
             
            }

            function loadDataAndBuildChart72() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/SS/SS03/samf_akfor.px", {
                    "query": [
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
                          "code": "region",
                          "selection": {
                            "filter": "item",
                            "values": [
                              "9"
                            ]
                          }
                        },
                        {
                          "code": "type of motor vehicle",
                          "selection": {
                            "filter": "item",
                            "values": [
                              "6"
                            ]
                          }
                        }


                    ],
                    "response": {
                        "format": "json-stat"
                    }
                }, function(data) {
                    chart72Data = data;
                    drawChart72();
                });
            }





//---------------------------------------------------------
//                       CHART 7
//---------------------------------------------------------

            var chart73;
            var chart73Data;
            var chart73_last_month;

            //Chart 7 specific functions
            function drawChart73() {
                var jsonStatData = chart73Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);
                //Format Data

               year = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;                

                number = ds.Data({ "year": ds.Dimension("year").id[0] }, false).filter(function(n) { return n; });
                mon = ds.Dimension("quarters").id[number.length-1];
                number = ds.Data({ "year": ds.Dimension("year").id[0], "quarters": ds.Dimension("quarters").id[number.length - 1] }, false);


                number = parseFloat(Math.round(number * 100) / 100).toFixed(0).toString().replace(".", ",");
                number = numberWithCommas(number);

                $('#brpmonth').append(mon + " " +  year);
                $('#brpnumber').append(number);
             
            }

            function loadDataAndBuildChart73() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/IP/IP02/pris_hovb.px", {
                    "query": [
                    {
                      "code": "commodity groups",
                      "selection": {
                        "filter": "item",
                        "values": [
                          "BRP"
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
                          "Q1",
                          "Q2",
                          "Q3",
                          "Q4"
                        ]
                      }
                    }
                    ],
                    "response": {
                        "format": "json-stat"
                    }
                }, function(data) {
                    chart73Data = data;
                    drawChart73();
                });
            }




//---------------------------------------------------------
//                       CHART 4
//---------------------------------------------------------

            var chart24;
            var chart24Data;
            var chart24_last_month;

            //Chart 4 specific functions
            function drawChart24() {

                //Extrat Data From JSON Stat
                var jsonStatData = chart24Data;

                //Format Data
                ds = JSONstat(jsonStatData).Dataset(0);

                m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;                

                $('#pensionersmonth').append(m);
                number = ds.Data({ "year": ds.Dimension("year").id[0], "age": "67 ár o.e." }, false) / ds.Data({ "year": ds.Dimension("year").id[0], "age": "Tils. (aldur)" }, false) * 100;

                number = parseFloat(Math.round(number * 100) / 100).toFixed(1).toString().replace(".", ",");
                $('#pensionersnumber').append(number);
            
            }

            function loadDataAndBuildChart24() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/IB/IB01/fo_aldbygd.px", {
                    "query": [
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
                          "code": "age",
                          "selection": {
                            "filter": "agg:aldur0667.agg",
                            "values": [
                              "Tils. (aldur)",
                              "67 ár o.e."
                            ]
                          }
                        }                        


                    ],
                    "response": {
                        "format": "json-stat"
                    }
                }, function(data) {
                    chart24Data = data;
                    drawChart24();
                });
            }




//---------------------------------------------------------
//                       CHART 5
//---------------------------------------------------------

            var chart25;
            var chart25Data;
            var chart25_last_month;

            //Chart 5 specific functions
            function drawChart25() {

                //Extrat Data From JSON Stat
                var jsonStatData = chart25Data;

                //Format Data
                ds = JSONstat(jsonStatData).Dataset(0);

                m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;                

                $('#childrenmonth').append(m);
                number = ds.Data({ "year": ds.Dimension("year").id[0], "age": "00-17 ár" }, false) / ds.Data({ "year": ds.Dimension("year").id[0], "age": "Tils. (aldur)" }, false) * 100;

                number = parseFloat(Math.round(number * 100) / 100).toFixed(1).toString().replace(".", ",");
                $('#childrennumber').append(number);
            
            }

            function loadDataAndBuildChart25() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/IB/IB01/fo_aldbygd.px", {
                    "query": [
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
                          "code": "age",
                          "selection": {
                            "filter": "agg:aldur1864.agg",
                            "values": [
                              "Tils. (aldur)",
                              "00-17 ár"
                            ]
                          }
                        }                  


                    ],
                    "response": {
                        "format": "json-stat"
                    }
                }, function(data) {
                    chart25Data = data;
                    drawChart25();
                });
            }




//---------------------------------------------------------
//                       CHART 6
//---------------------------------------------------------

            var chart26;
            var chart26Data;
            var chart26_last_month;

            //Chart 6 specific functions
            function drawChart26() {

                //Extrat Data From JSON Stat
                var jsonStatData = chart26Data;

                //Format Data
                ds = JSONstat(jsonStatData).Dataset(0);

                m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;                

                $('#daycaremonth').append(m);
                number = ds.Data({ "year": ds.Dimension("year").id[0], "kind of day-care": "DS" }, false) + ds.Data({ "year": ds.Dimension("year").id[0], "kind of day-care": "DR" }, false);

                number = numberWithCommas(number);


                $('#daycarenumber').append(number);
            
            }

            function loadDataAndBuildChart26() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/UV/UV01/barn_ansing.px", {
                    "query": [
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
                          "code": "kind of day-care",
                          "selection": {
                            "filter": "item",
                            "values": [
                              "DS",
                              "DR"
                            ]
                          }
                        }                  


                    ],
                    "response": {
                        "format": "json-stat"
                    }
                }, function(data) {
                    chart26Data = data;
                    drawChart26();
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
                loadDataAndBuildChart71();
                loadDataAndBuildChart72();
                loadDataAndBuildChart73();
                loadDataAndBuildChart24();                
                loadDataAndBuildChart25();
                loadDataAndBuildChart26();            
            });            
