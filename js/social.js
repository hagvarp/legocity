
Date.prototype.getMonthText = function () {
    var months = ['Januar', 'Februar', 'Mars', 'Apríl', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'];
    return months[this.getMonth()];
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}



//---------------------------------------------------------
//                       CHART 21
//---------------------------------------------------------
var chart21;
var chart21Data;
var chart21_last_month;

//Chart 21 specific functions
function drawChart21() {
    var jsonStatData = chart21Data;
    //Extrat Data From JSON Stat
    ds = JSONstat(jsonStatData).Dataset(0);

    //Format Data

    mon = ds.Dimension("month").Category(ds.Dimension("month").id[0]).label;
    year = mon.substring(0,4);

    number = ds.Data({"month": ds.Dimension("month").id[0] }, false);

    mon = mon.replace("M", "-");

    mon = mon;
    mon = new Date(mon);


    number = numberWithCommas(number);


    $('#popuplationmonth').append("1. " + mon.getMonthText().toLowerCase() + " " + year);
    $('#popuplationnumber').append(number);

}

function loadDataAndBuildChart21() {
    POST("https://statbank.hagstova.fo:443/api/v1/fo/H2/IB/IB01/fo_vit_md_t.px", {
        "query": [
            {
                "code": "changes",
                "selection": {
                    "filter": "item",
                    "values": [
                        "Popu_primo"
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
    }, function (data) {
        chart21Data = data;
        drawChart21();
    });
}




//---------------------------------------------------------
//                       CHART 2
//---------------------------------------------------------
var chart22;
var chart22Data;
var chart22_last_month;

//Chart 2 specific functions
function drawChart22() {
    var jsonStatData = chart22Data;
    //Extrat Data From JSON Stat
    ds = JSONstat(jsonStatData).Dataset(0);

    //Format Data

    m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;

    $('#lifeexpectancymenmonth').append(m);
    number = ds.Data({ "year": ds.Dimension("year").id[0] }, false);
    number = parseFloat(Math.round(number * 100) / 100).toFixed(1).toString().replace(".", ",");
    number = numberWithCommas(number);
    $('#lifeexpectancymennumber').append(number);

}

function loadDataAndBuildChart22() {
    POST("https://statbank.hagstova.fo/api/v1/fo/H2/IB/IB02/fd_livsavi.px", {
        "query": [
            {
                "code": "measure",
                "selection": {
                    "filter": "item",
                    "values": [
                        "lowess_smooth"
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
                "code": "age",
                "selection": {
                    "filter": "item",
                    "values": [
                        "Y_LT1"
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
        chart22Data = data;
        drawChart22();
    });
}





//---------------------------------------------------------
//                       CHART 3
//---------------------------------------------------------

var chart23;
var chart23Data;
var chart23_last_month;

//Chart 3 specific functions
function drawChart23() {
    var jsonStatData = chart23Data;
    //Extrat Data From JSON Stat
    ds = JSONstat(jsonStatData).Dataset(0);
    //Format Data

    m = ds.Dimension("year").Category(ds.Dimension("year").id[0]).label;

    $('#lifeexpectancywomenmonth').append(m);
    number = ds.Data({ "year": ds.Dimension("year").id[0] }, false);
    number = parseFloat(Math.round(number * 100) / 100).toFixed(1).toString().replace(".", ",");
    number = numberWithCommas(number);
    $('#lifeexpectancywomennumber').append(number);

}

function loadDataAndBuildChart23() {
    POST("https://statbank.hagstova.fo/api/v1/fo/H2/IB/IB02/fd_livsavi.px", {
        "query": [
            {
                "code": "measure",
                "selection": {
                    "filter": "item",
                    "values": [
                        "lowess_smooth"
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
                "code": "age",
                "selection": {
                    "filter": "item",
                    "values": [
                        "Y_LT1"
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
        chart23Data = data;
        drawChart23();
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
    number = ds.Data({ "year": ds.Dimension("year").id[0], "age": "Y_GE67" }, false) / ds.Data({ "year": ds.Dimension("year").id[0], "age": "Y_TOTAL" }, false) * 100;

    number = parseFloat(Math.round(number * 100) / 100).toFixed(1).toString().replace(".", ",");
    $('#pensionersnumber').append(number);

}

function loadDataAndBuildChart24() {



    POST("https://statbank.hagstova.fo/api/v1/fo/H2/IB/IB01/fo_abgd_md.px", {
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
                "code": "month",
                "selection": {
                    "filter": "item",
                    "values": [
                        "M01"
                    ]
                }
            },
            {
                "code": "age",
                "selection": {
                    "filter": "agg:age-fo-0667.agg",
                    "values": [
                        "Y_TOTAL",
                        "Y_GE67"
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

    $('#childrenmonth').append(m);
    number = ds.Data({ "year": ds.Dimension("year").id[0], "age": "Y_LT18" }, false) / ds.Data({ "year": ds.Dimension("year").id[0], "age": "Y_TOTAL" }, false) * 100;

    number = parseFloat(Math.round(number * 100) / 100).toFixed(1).toString().replace(".", ",");
    $('#childrennumber').append(number);

}

function loadDataAndBuildChart25() {
    POST("https://statbank.hagstova.fo/api/v1/fo/H2/IB/IB01/fo_abgd_md.px", {
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
                "code": "month",
                "selection": {
                    "filter": "item",
                    "values": [
                        "M01"
                    ]
                }
            },
            {
                "code": "age",
                "selection": {
                    "filter": "agg:age-fo-1865.agg",
                    "values": [
                        "Y_TOTAL",
                        "Y_LT18"
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
    loadDataAndBuildChart21();
    loadDataAndBuildChart22();
    loadDataAndBuildChart23();
    loadDataAndBuildChart24();
    loadDataAndBuildChart25();
    loadDataAndBuildChart26();
});
