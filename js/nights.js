
Date.prototype.getMonthText = function () {
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
    $('#nightsmonth').append(mon.getMonthText() + " " + mon.getFullYear());
    arbeidsloys = ds.Data({ "month": ds.Dimension("month").id[0] }, false);
    arbeidsloys = numberWithCommas(arbeidsloys);
    $('#nightsnumber').append(arbeidsloys);


}

function loadDataAndBuildChart1() {
    POST("https://statbank.hagstova.fo:443/api/v1/fo/H2/VV/VV07/gist_hus_t.px", {
        "query": [
            {
                "code": "unit",
                "selection": {
                    "filter": "item",
                    "values": [
                        "STAYS"
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
    }, function (data) {
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


    m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;
    $('#askodararyear').append(m);
    number = ds.Data({ "year": ds.Dimension("year").id[0] }, false);
    number = parseFloat(Math.round(number * 100) / 100).toFixed(0).toString().replace(".", ",");
    number = numberWithCommas(number);
    $('#askodararnumber').append(number);



}

function loadDataAndBuildChart2() {
    POST("https://statbank.hagstova.fo:443/api/v1/fo/H2/MM/MM01/ment_bio.px", {
        "query": [
            {
                "code": "unit",
                "selection": {
                    "filter": "item",
                    "values": [
                        "AUD"
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
    }, function (data) {
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

    m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;
    $('#filmfoyear').append(m);
    number = ds.Data({ "year": ds.Dimension("year").id[0] }, false);
    number = parseFloat(Math.round(number * 100) / 100).toFixed(0).toString().replace(".", ",");
    number = numberWithCommas(number);
    $('#filmfonumber').append(number);


}

function loadDataAndBuildChart3() {
    POST("https://statbank.hagstova.fo:443/api/v1/fo/H2/MM/MM01/ment_bio.px", {
        "query": [
            {
                "code": "unit",
                "selection": {
                    "filter": "item",
                    "values": [
                        "FAR"
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
    }, function (data) {
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
    $('#filmutlyear').append(m);
    number = ds.Data({ "year": ds.Dimension("year").id[0] }, false);
    number = parseFloat(Math.round(number * 100) / 100).toFixed(0).toString().replace(".", ",");
    number = numberWithCommas(number);
    $('#filmutlnumber').append(number);


}

function loadDataAndBuildChart4() {
    POST("https://statbank.hagstova.fo:443/api/v1/fo/H2/MM/MM01/ment_bio.px", {
        "query": [
            {
                "code": "unit",
                "selection": {
                    "filter": "item",
                    "values": [
                        "FOR"
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
    }, function (data) {
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
        success: function (data) {
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
