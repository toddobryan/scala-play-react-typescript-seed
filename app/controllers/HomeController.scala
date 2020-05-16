package controllers

import java.time.LocalDateTime

import javax.inject._
import play.api.libs.json.Json
import play.api.mvc._

@Singleton
class HomeController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def appSummary = Action {
    Ok(Json.obj("content" -> s"Scala Play React Typescript Seed! (${LocalDateTime.now()})"))
  }
}
