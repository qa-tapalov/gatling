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
        "total": "4008",
        "ok": "4008",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6235",
        "ok": "6235",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4917",
        "ok": "4917",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "904",
        "ok": "904",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4712",
        "ok": "4712",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5510",
        "ok": "5510",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6090",
        "ok": "6090",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6206",
        "ok": "6206",
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
        "total": "0.308",
        "ok": "0.308",
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
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4156",
        "ok": "4156",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5268",
        "ok": "5268",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4712",
        "ok": "4712",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4712",
        "ok": "4712",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4990",
        "ok": "4990",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5212",
        "ok": "5212",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5257",
        "ok": "5257",
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
    "count": 2,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.154",
        "ok": "0.154",
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
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4008",
        "ok": "4008",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6235",
        "ok": "6235",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5122",
        "ok": "5122",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1114",
        "ok": "1114",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5122",
        "ok": "5122",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5678",
        "ok": "5678",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6124",
        "ok": "6124",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6213",
        "ok": "6213",
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
    "count": 2,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.154",
        "ok": "0.154",
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
