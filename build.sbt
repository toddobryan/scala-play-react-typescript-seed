import sbt.Keys.libraryDependencies

name := """scala-play-react-typescript-seed"""

version := "0.1-SNAPSHOT"

resolvers += Resolver.sonatypeRepo("snapshots")

scalaVersion := "2.13.1"

lazy val root = (project in file(".")).enablePlugins(PlayScala).settings(
  watchSources ++= (baseDirectory.value / "public/ui" ** "*").get,
  libraryDependencies ++= Seq(
    guice,
    "com.h2database" % "h2" % "1.4.200",

    "org.scalatestplus.play" %% "scalatestplus-play" % "5.1.0" % Test
  )
)


