
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

//Chart 2 specific functions
function drawChart2() {
    var jsonStatData = chart2Data;
    //Extrat Data From JSON Stat
    ds = JSONstat(jsonStatData).Dataset(0);

    //Format Data
    var unemploymentdata = [];

    m = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
    mon = m.replace("M", "-");
    mon = new Date(mon);



    $('#nytslamonth').append(mon.getMonthText() + " " + mon.getFullYear());
    arbeidsloys = ds.Data({ "month": ds.Dimension("month").id[0] }, false);
    arbeidsloys = parseFloat(Math.round(arbeidsloys * 100) / 100).toFixed(1).toString().replace(".", ",");

    $('#nytslanumber').append(arbeidsloys);


}

function loadDataAndBuildChart2() {
    POST("https://statbank.hagstova.fo:443/api/v1/fo/H2/VV/VV07/gist_nstig_t.px", {
        "query": [
            {
                "code": "unit",
                "selection": {
                    "filter": "item",
                    "values": [
                        "ROOMS_PCT"
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
        chart2Data = data;
        drawChart2();
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
    //Extrat Data From JSON Stat7
    //Format Data

    m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;

    number = ds.Data({ "year": ds.Dimension("year").id[0] }, false);
    number = parseFloat(Math.round(number * 100) / 100).toFixed(0).toString().replace(".", ",");
    number = numberWithCommas(number);


    $('#pupilmonth').append(m);
    $('#pupilnumber').append(number);

}

function loadDataAndBuildChart73() {
    POST("https://statbank.hagstova.fo:443/api/v1/fo/H2/UV/UV02/fs_ntalkyn.px", {
        "query": [
            {
                "code": "class",
                "selection": {
                    "filter": "item",
                    "values": [
                        "TOT"
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

    var jsonStatData = chart24Data;
    //Extrat Data From JSON Stat
    ds = JSONstat(jsonStatData).Dataset(0);
    //Format Data

    m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;



    number = ds.Data({ "year": ds.Dimension("year").id[0], "sex": "F" }, false);
    number = parseFloat(Math.round(number * 100) / 100).toFixed(0).toString().replace(".", ",");
    number = numberWithCommas(number);


    $('#pupilgirlmonth').append(m);
    $('#pupilgirlnumber').append(number);

}

function loadDataAndBuildChart24() {
    POST("https://statbank.hagstova.fo:443/api/v1/fo/H2/UV/UV02/fs_ntalkyn.px", {
        "query": [
            {
                "code": "class",
                "selection": {
                    "filter": "item",
                    "values": [
                        "TOT"
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
                "code": "sex",
                "selection": {
                    "filter": "item",
                    "values": [
                        "F"
                    ]
                }
            }
        ],
        "response": {
            "format": "json-stat"
        }
    }, function (data) {
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


    number = ds.Data({ "year": ds.Dimension("year").id[0], "sex": "M" }, false);
    number = parseFloat(Math.round(number * 100) / 100).toFixed(0).toString().replace(".", ",");
    number = numberWithCommas(number);


    $('#pupilboymonth').append(m);
    $('#pupilboynumber').append(number);

}

function loadDataAndBuildChart25() {
    POST("https://statbank.hagstova.fo:443/api/v1/fo/H2/UV/UV02/fs_ntalkyn.px", {
        "query": [
            {
                "code": "class",
                "selection": {
                    "filter": "item",
                    "values": [
                        "TOT"
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
                "code": "sex",
                "selection": {
                    "filter": "item",
                    "values": [
                        "M"
                    ]
                }
            }
        ],
        "response": {
            "format": "json-stat"
        }
    }, function (data) {
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
    }, function (data) {
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
        success: function (data) {
            main(data);
        }
    });
}

//START LOADING AND BUILDING CHARTS
$(function () {

    loadDataAndBuildChart73();
    loadDataAndBuildChart24();
    loadDataAndBuildChart25();
    loadDataAndBuildChart26();
    loadDataAndBuildChart1();
    loadDataAndBuildChart2();
});
