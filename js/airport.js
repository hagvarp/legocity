
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


            var chart31;
            var chart31Data;
            var chart31_last_month;

            //Chart 31 specific functions
            function drawChart31() {
                var jsonStatData = chart31Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data             

               year = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;                


                number = ds.Data({ "year": ds.Dimension("year").id[0] }, false).filter(function(n) { return n; });
                mon = ds.Dimension("month").id[number.length - 1];
                number = ds.Data({ "year": ds.Dimension("year").id[0], "month": ds.Dimension("month").id[number.length - 1] }, false);

                mon = mon.replace("M", "-");              
                mon = year + mon;
                mon = new Date(mon);

                $('#immigrantmonth').append(mon.getMonthText() + " " +  year);
                $('#immigrantnumber').append(number);


            }

            function loadDataAndBuildChart31() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/IB/IB01/fo_vital_md.px", {
                    "query": [
                        {
                            "code": "changes",
                            "selection": {
                                "filter": "item",
                                "values": [
                                    "IMMIUT"
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
                    chart31Data = data;
                    drawChart31();
                });
            }





//---------------------------------------------------------
//                       CHART 2
//---------------------------------------------------------


            var chart32;
            var chart32Data;
            var chart32_last_month;

            //Chart 32 specific functions
            function drawChart32() {
                var jsonStatData = chart32Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data             

               year = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;                

                number = ds.Data({ "year": ds.Dimension("year").id[0] }, false).filter(function(n) { return n; });
                mon = ds.Dimension("month").id[number.length - 1];
                number = ds.Data({ "year": ds.Dimension("year").id[0], "month": ds.Dimension("month").id[number.length - 1] }, false);

                mon = mon.replace("M", "-");   
                mon = year + mon;                           
                mon = new Date(mon);

                $('#emmigrantmonth').append(mon.getMonthText() + " " +  year);
                $('#emmigrantnumber').append(number);


            }

            function loadDataAndBuildChart32() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/IB/IB01/fo_vital_md.px", {
                    "query": [
                        {
                            "code": "changes",
                            "selection": {
                                "filter": "item",
                                "values": [
                                    "EMIUT"
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
                    chart32Data = data;
                    drawChart32();
                });
            }






//---------------------------------------------------------
//                       CHART 33
//---------------------------------------------------------
            var chart33;
            var chart33Data;
            var chart33_last_month;

            //Chart 33 specific functions
            function drawChart33() {
                var jsonStatData = chart33Data;
                //Extrat Data From JSON Stat
                ds = JSONstat(jsonStatData).Dataset(0);

                //Format Data
                var data = [];
               
                m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;                

                $('#passmonth').append(m);
                arbeidsloys = ds.Data({ "year": ds.Dimension("year").id[0] }, false);
                arbeidsloys = numberWithCommas(arbeidsloys);
                $('#passnumber').append(arbeidsloys);


            }

            function loadDataAndBuildChart33() {
                POST("https://statbank.hagstova.fo/api/v1/fo/H2/SS/SS01/ferd_lfarm.px", {
                    "query": [
                        {
                            "code": "type",
                            "selection": {
                                "filter": "item",
                                "values": [
                                    "PASS"
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
                    chart33Data = data;
                    drawChart33();
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
                loadDataAndBuildChart31();
                loadDataAndBuildChart32();
                loadDataAndBuildChart33();
            });            
