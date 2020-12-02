
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
            var chart41;
            var chart41Data;
            var chart41_last_month;

            //Chart 41 specific functions
            function drawChart41() {
                var jsonStatData = chart41Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var unemploymentdata = [];
               
                m = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
                mon = m.replace("M", "-");
                mon = new Date(mon);
                $('#importmonth').append(mon.getMonthText() + " " +  mon.getFullYear());
                arbeidsloys = ds.Data({ "month": ds.Dimension("month").id[0] }, false);
                arbeidsloys = parseFloat(Math.round(arbeidsloys * 100) / 100000).toFixed(0).toString().replace(".", ",");
                $('#importnumber').append(arbeidsloys);


            }

            function loadDataAndBuildChart41() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/UH/UH01/uh_innbec_t.px", {
                    "query": [
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
                    chart41Data = data;
                    drawChart41();
                });
            }




//---------------------------------------------------------
//                       CHART 2
//---------------------------------------------------------
            var chart42;
            var chart42Data;
            var chart42_last_month;

            //Chart 42 specific functions
            function drawChart42() {
                var jsonStatData = chart42Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var unemploymentdata = [];
               
                m = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
                mon = m.replace("M", "-");
                mon = new Date(mon);
                $('#exportmonth').append(mon.getMonthText() + " " +  mon.getFullYear());
                arbeidsloys = ds.Data({ "month": ds.Dimension("month").id[0] }, false);
                arbeidsloys = parseFloat(Math.round(arbeidsloys * 100) / 100000).toFixed(0).toString().replace(".", ",");
                $('#exportnumber').append(arbeidsloys);


            }

            function loadDataAndBuildChart42() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/UH/UH01/uh_uthbolk_t.px", {
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
                    chart42Data = data;
                    drawChart42();
                });
            }





//---------------------------------------------------------
//                       CHART 2
//---------------------------------------------------------
            var chart42;
            var chart42Data;
            var chart42_last_month;

            //Chart 42 specific functions
            function drawChart42() {
                var jsonStatData = chart42Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var unemploymentdata = [];
               
                m = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
                mon = m.replace("M", "-");
                mon = new Date(mon);
                $('#exportmonth').append(mon.getMonthText() + " " +  mon.getFullYear());
                arbeidsloys = ds.Data({ "month": ds.Dimension("month").id[0] }, false);
                arbeidsloys = parseFloat(Math.round(arbeidsloys * 100) / 100000).toFixed(0).toString().replace(".", ",");
                $('#exportnumber').append(arbeidsloys);


            }

            function loadDataAndBuildChart42() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/UH/UH01/uh_uthbolk_t.px", {
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
                    chart42Data = data;
                    drawChart42();
                });
            }



//---------------------------------------------------------
//                       CHART 3
//---------------------------------------------------------
            var chart43;
            var chart43Data;
            var chart43_last_month;

            //Chart 43 specific functions
            function drawChart43() {
                var jsonStatData = chart43Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var unemploymentdata = [];
               
                m = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
                mon = m.replace("M", "-");
                mon = new Date(mon);
                $('#wetfishcatchesmonth').append(mon.getMonthText() + " " +  mon.getFullYear());
                arbeidsloys = ds.Data({ "month": ds.Dimension("month").id[0] }, false);
                arbeidsloys = parseFloat(Math.round(arbeidsloys * 100) / 100000).toFixed(1).toString().replace(".", ",");
                $('#wetfishcatchesnumber').append(arbeidsloys);


            }

            function loadDataAndBuildChart43() {
                POST("https://statbank.hagstova.fo:443/api/v1/fo/H2/VV/VV01/fv_avreid0_t.px", {
                    "query": [
                        {
                            "code": "measure",
                            "selection": {
                              "filter": "item",
                              "values": [
                                "VALUE"
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
                    chart43Data = data;
                    drawChart43();
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
                POST("https://statbank.hagstova.fo:443/api/v1/fo/H2/VV/VV01/fv_avreid0_t.px", {
                    "query": [                   
                        {
                            "code": "measure",
                            "selection": {
                              "filter": "item",
                              "values": [
                                "TONNES"
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
                loadDataAndBuildChart41();
                loadDataAndBuildChart42();
                loadDataAndBuildChart43();
                loadDataAndBuildChart44();
            });            
