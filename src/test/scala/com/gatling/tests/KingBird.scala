package com.gatling.tests



import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef.{http, status}
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.Predef._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class KingBird extends Simulation{


val httpConf = http.baseUrl("https://kingbird.ru/")

    val scn = scenario("KingBird")
      .exec(Requests.getPageMain)
      .exec(Requests.getOurProjects)
      .exec(Requests.getAboutUs)
      .exec(Requests.getCareer)
      .exec(Requests.getContacts)
  setUp(scn.inject(constantUsersPerSec(1) during (1 seconds)).protocols(httpConf))

}

