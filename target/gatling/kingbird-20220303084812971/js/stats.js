var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "4",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4293",
        "ok": "4293",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9324",
        "ok": "9324",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6441",
        "ok": "6441",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1820",
        "ok": "1820",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6073",
        "ok": "6073",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7010",
        "ok": "7010",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8861",
        "ok": "8861",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9231",
        "ok": "9231",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.364",
        "ok": "0.364",
        "ko": "-"
    }
},
contents: {
"req_getpagemain-92a30": {
        type: "REQUEST",
        name: "getPageMain",
path: "getPageMain",
pathFormatted: "req_getpagemain-92a30",
stats: {
    "name": "getPageMain",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4293",
        "ok": "4293",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6239",
        "ok": "6239",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5479",
        "ok": "5479",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "850",
        "ok": "850",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5906",
        "ok": "5906",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6073",
        "ok": "6073",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6206",
        "ok": "6206",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6232",
        "ok": "6232",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.273",
        "ok": "0.273",
        "ko": "-"
    }
}
    },"req_------------d9416": {
        type: "REQUEST",
        name: "Наши работы",
path: "Наши работы",
pathFormatted: "req_------------d9416",
stats: {
    "name": "Наши работы",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9324",
        "ok": "9324",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9324",
        "ok": "9324",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9324",
        "ok": "9324",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9324",
        "ok": "9324",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9324",
        "ok": "9324",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9324",
        "ok": "9324",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9324",
        "ok": "9324",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.091",
        "ok": "0.091",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
