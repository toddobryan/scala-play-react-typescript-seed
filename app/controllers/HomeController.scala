package controllers

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

import javax.inject._
import play.api.libs.json.Json
import play.api.mvc._

@Singleton
class HomeController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def time = Action {
    Ok(Json.obj("content" ->
      s"${LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME)})"))
  }
}
