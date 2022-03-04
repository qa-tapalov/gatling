package com.gatling.tests

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef.{http, status}
object Requests {
  val getPageMain = exec(http("Main Page")
    .get("/")
    .check(status.is(200))
  )


  val getOurProjects = exec(http("Our Projects")
    .get("/projects")
    .check(status.is(200))
  )

  val getAboutUs = exec(http("About Us")
    .get("/about")
    .check(status.is(200)))

  val getCareer = exec(http("Career")
    .get("/career")
    .check(status.is(200)))

  val getContacts = exec(http("Contacts")
    .get("/contacts")
    .check(status.is(200))
  )
}