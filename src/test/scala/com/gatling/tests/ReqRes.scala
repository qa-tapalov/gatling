package com.gatling.tests

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import net.sf.saxon.s9api.streams.Steps

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class ReqRes extends Simulation {


  val httpConf = http.baseUrl("https://reqres.in/")

  val scn = scenario("Reqres")
    .exec(Requests.getListUsers)
    .exec(Requests.getSingleUsers)
    .exec(Requests.getSingleIserNotFound)
    .exec(Requests.createUsers)
    .exec(Requests.updateUser)
    .exec(Requests.register)
  val auth = http.baseUrl("https://api.demoblaze.com")

  setUp(
    scn.inject(constantUsersPerSec(1) during (1 seconds)).protocols(httpConf),
  )

  object Requests {
    val getListUsers = exec(http("List Users")
      .get("/api/users?page=2")
      .check(status.is(200))
    )


    val getSingleUsers = exec(http("Single User")
      .get("/api/users/2")
      .check(status.is(200))
    )

    val getSingleIserNotFound = exec(http("Single user not found")
    .get("/api/user/12121212")
    .check(status.is(404)))


    val createUsers = exec(http("Create User")
    .post("/api/users")
    .body(StringBody("""{"name":"max","job":"miner"}""")).asJson
      .check(status.is(201))
      .check(jsonPath("$.id").saveAs("id"))
    ).exec(http("Check created User")
      .get("/api/users/${id}")
      .check(status.is(404)))
      .exec(http("Delete user")
      .delete("/api/users/${id}")
      .check(status.is(204)))

    val updateUser = exec(http("Update User")
      .put("/api/users/51")
      .body(StringBody("""{"name":"max","job":"miner"}""")).asJson
      .check(status.is(200))

    )

    val register = exec(http("Register")
      .post("/api/register")
      .body(StringBody("""{"email":"max@test.ru","password":"1234567"}"""))
      .check(status.is(200))
    )

  }

}

