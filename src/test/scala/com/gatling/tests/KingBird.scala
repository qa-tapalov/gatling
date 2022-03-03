package com.gatling.tests



import Requests.{getAboutUs, getOurProjects, getPageMain}
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef.http
import io.gatling.core.Predef._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class KingBird extends Simulation{


val httpConf = http.baseUrl("https://kingbird.ru/")

    val scn = scenario("KingBird")
      randomSwitch(
        (35,getPageMain),

      (35, getOurProjects),

      (30, getAboutUs)
      )

  setUp(scn.inject(constantUsersPerSec(3) during (3 seconds)).protocols(httpConf))

}
