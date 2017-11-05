
Date.prototype.getMonthText = function() {
  var months = ['Januar', 'Februar', 'Mars', 'Apríl', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'];
  return months[this.getMonth()];
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
            });            

