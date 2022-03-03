var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2894",
        "ok": "2894",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8526",
        "ok": "8526",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5151",
        "ok": "5151",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2294",
        "ok": "2294",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3685",
        "ok": "3685",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7276",
        "ok": "7276",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8276",
        "ok": "8276",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8476",
        "ok": "8476",
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
        "total": "0.417",
        "ok": "0.417",
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
        "total": "2894",
        "ok": "2894",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8526",
        "ok": "8526",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5151",
        "ok": "5151",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2294",
        "ok": "2294",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3685",
        "ok": "3685",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7276",
        "ok": "7276",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8276",
        "ok": "8276",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8476",
        "ok": "8476",
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
        "total": "0.417",
        "ok": "0.417",
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
