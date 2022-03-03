package com.gatling.tests

import io.gatling.http.Predef._
import io.gatling.core.Predef._


object Requests {
  val getPageMain = exec(http("getPageMain")
    .get("/")
    .check(status.is(200))
  )


  val getOurProjects = exec(http("getOurProjects")
    .get("/projects")
    .check(status.is(200))
  )

  val getAboutUs = exec(http("About Us")
  .get("/about")
  .check(status.is(200)))
}
