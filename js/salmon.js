
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
            var chart51;
            var chart51Data;
            var chart51_last_month;

            //Chart 33 specific functions
            function drawChart51() {
                var jsonStatData = chart51Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var data = [];
               
                m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;                

                $('#salmonharvestmonth').append(m);
                arbeidsloys = ds.Data({ "year": ds.Dimension("year").id[0] }, false);
                arbeidsloys = parseFloat(Math.round(arbeidsloys * 100) / 100).toFixed(0).toString().replace(".", ",");
                arbeidsloys = numberWithCommas(arbeidsloys);

                $('#salmonharvestnumber').append(arbeidsloys);


            }

            function loadDataAndBuildChart51() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/VV/VV02/hav_tikin.px", {
                    "query": [
					    {
					      "code": "species",
					      "selection": {
					        "filter": "item",
					        "values": [
					          "23"
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



                    ],
                    "response": {
                        "format": "json-stat"
                    }
                }, function(data) {
                    chart51Data = data;
                    drawChart51();
                });
            }





//---------------------------------------------------------
//                       CHART 2
//---------------------------------------------------------
            var chart52;
            var chart52Data;
            var chart52_last_month;

            //Chart 52 specific functions
            function drawChart52() {
                var jsonStatData = chart52Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var data = [];
               
                m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;                

                $('#salmonsmoltmonth').append(m);
                arbeidsloys = ds.Data({ "year": ds.Dimension("year").id[0] }, false);
                arbeidsloys = parseFloat(Math.round(arbeidsloys * 100) / 100).toFixed(0).toString().replace(".", ",");
                arbeidsloys = numberWithCommas(arbeidsloys);

                $('#salmonsmoltnumber').append(arbeidsloys);


            }

            function loadDataAndBuildChart52() {
                POST("https://statbank.hagstova.fo/api/v1/en/H2/VV/VV02/hav_smolt.px", {
                    "query": [
					    {
					      "code": "species",
					      "selection": {
					        "filter": "item",
					        "values": [
					          "23"
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



                    ],
                    "response": {
                        "format": "json-stat"
                    }
                }, function(data) {
                    chart52Data = data;
                    drawChart52();
                });
            }





//---------------------------------------------------------
//                       CHART 3
//---------------------------------------------------------
            var chart53;
            var chart53Data;
            var chart53_last_month;

            //Chart 53 specific functions
            function drawChart53() {
                var jsonStatData = chart53Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var unemploymentdata = [];
               
                m = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
                mon = m.replace("M", "-");
                mon = new Date(mon);
                $('#salmonexporttonnesmonth').append(mon.getMonthText() + " " +  mon.getFullYear());
                arbeidsloys = ds.Data({ "month": ds.Dimension("month").id[0] }, false);
                arbeidsloys = parseFloat(Math.round(arbeidsloys * 100) / 100).toFixed(0).toString().replace(".", ",");
                arbeidsloys = numberWithCommas(arbeidsloys);
                $('#salmonexporttonnesnumber').append(arbeidsloys);


            }

            function loadDataAndBuildChart53() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/UH/UH01/uh_ututgr_t.px", {
                    "query": [
					    {
					      "code": "unit",
					      "selection": {
					        "filter": "item",
					        "values": [
					          "TON"
					        ]
					      }
					    },
					    {
					      "code": "commodity group",
					      "selection": {
					        "filter": "item",
					        "values": [
					          "011"
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
                    chart53Data = data;
                    drawChart53();
                });
            }




//---------------------------------------------------------
//                       CHART 4
//---------------------------------------------------------
            var chart54;
            var chart54Data;
            var chart54_last_month;

            //Chart 54 specific functions
            function drawChart54() {
                var jsonStatData = chart54Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var unemploymentdata = [];
               
                m = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
                mon = m.replace("M", "-");
                mon = new Date(mon);
                $('#salmonexportmonth').append(mon.getMonthText() + " " +  mon.getFullYear());
                arbeidsloys = ds.Data({ "month": ds.Dimension("month").id[0] }, false);
                arbeidsloys = parseFloat(Math.round(arbeidsloys * 100) / 100000).toFixed(0).toString().replace(".", ",");
                arbeidsloys = numberWithCommas(arbeidsloys);
                $('#salmonexportnumber').append(arbeidsloys);


            }

            function loadDataAndBuildChart54() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/UH/UH01/uh_ututgr_t.px", {
                    "query": [
					    {
					      "code": "unit",
					      "selection": {
					        "filter": "item",
					        "values": [
					          "DKK"
					        ]
					      }
					    },
					    {
					      "code": "commodity group",
					      "selection": {
					        "filter": "item",
					        "values": [
					          "011"
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
                    chart54Data = data;
                    drawChart54();
                });
            }


//---------------------------------------------------------
//                       CHART 4
//---------------------------------------------------------
            var chart44;
            var chart44Data;
            var chart44_last_month;

            //Chart 44 specific functions
            function drawChart44() {
                var jsonStatData = chart44Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var unemploymentdata = [];
               
                m = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
                mon = m.replace("M", "-");
                mon = new Date(mon);
                $('#wetfishcatchestonnesmonth').append(mon.getMonthText() + " " +  mon.getFullYear());
                arbeidsloys = ds.Data({ "month": ds.Dimension("month").id[0] }, false);

                arbeidsloys = parseFloat(Math.round(arbeidsloys * 100) / 100).toFixed(0).toString().replace(".", ",");
                arbeidsloys = numberWithCommas(arbeidsloys);

                $('#wetfishcatchestonnesnumber').append(arbeidsloys);


            }

            function loadDataAndBuildChart44() {
                POST("https://statbank.hagstova.fo/api/v1/en/H2/VV/VV01/fv_avrnogd_t.px", {
                    "query": [                   
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
                    chart44Data = data;
                    drawChart44();
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
                loadDataAndBuildChart51();
                loadDataAndBuildChart52();
                loadDataAndBuildChart53();
                loadDataAndBuildChart54();                
            });            
