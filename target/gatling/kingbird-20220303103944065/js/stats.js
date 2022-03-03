var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3906",
        "ok": "3906",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4177",
        "ok": "4177",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4042",
        "ok": "4042",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4042",
        "ok": "4042",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4109",
        "ok": "4109",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4163",
        "ok": "4163",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4174",
        "ok": "4174",
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
        "total": "0.222",
        "ok": "0.222",
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
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4177",
        "ok": "4177",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4177",
        "ok": "4177",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4177",
        "ok": "4177",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4177",
        "ok": "4177",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4177",
        "ok": "4177",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4177",
        "ok": "4177",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4177",
        "ok": "4177",
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
        "total": "0.111",
        "ok": "0.111",
        "ko": "-"
    }
}
    },"req_getourprojects-7342e": {
        type: "REQUEST",
        name: "getOurProjects",
path: "getOurProjects",
pathFormatted: "req_getourprojects-7342e",
stats: {
    "name": "getOurProjects",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3906",
        "ok": "3906",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3906",
        "ok": "3906",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3906",
        "ok": "3906",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3906",
        "ok": "3906",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3906",
        "ok": "3906",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3906",
        "ok": "3906",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3906",
        "ok": "3906",
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
        "total": "0.111",
        "ok": "0.111",
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
