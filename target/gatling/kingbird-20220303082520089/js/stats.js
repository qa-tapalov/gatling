var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5328",
        "ok": "5328",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "27213",
        "ok": "27213",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "14275",
        "ok": "14275",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7566",
        "ok": "7566",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14356",
        "ok": "14356",
        "ko": "-"
    },
    "percentiles2": {
        "total": "19616",
        "ok": "19616",
        "ko": "-"
    },
    "percentiles3": {
        "total": "25231",
        "ok": "25231",
        "ko": "-"
    },
    "percentiles4": {
        "total": "26817",
        "ok": "26817",
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
    "count": 10,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.27",
        "ok": "0.27",
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
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5328",
        "ok": "5328",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "27213",
        "ok": "27213",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "14757",
        "ok": "14757",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8644",
        "ok": "8644",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10506",
        "ok": "10506",
        "ko": "-"
    },
    "percentiles2": {
        "total": "22809",
        "ok": "22809",
        "ko": "-"
    },
    "percentiles3": {
        "total": "26332",
        "ok": "26332",
        "ko": "-"
    },
    "percentiles4": {
        "total": "27037",
        "ok": "27037",
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
    "count": 5,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.135",
        "ok": "0.135",
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
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5973",
        "ok": "5973",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20007",
        "ok": "20007",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "13792",
        "ok": "13792",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6269",
        "ok": "6269",
        "ko": "-"
    },
    "percentiles1": {
        "total": "18205",
        "ok": "18205",
        "ko": "-"
    },
    "percentiles2": {
        "total": "18444",
        "ok": "18444",
        "ko": "-"
    },
    "percentiles3": {
        "total": "19694",
        "ok": "19694",
        "ko": "-"
    },
    "percentiles4": {
        "total": "19944",
        "ok": "19944",
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
    "count": 5,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.135",
        "ok": "0.135",
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
