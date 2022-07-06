#!/bin/sh -e

start() {
  if [ ! -f /app/jdTools.jar ] && [ -f /app/tools.zip ]; then
    unzip /app/tools.zip -d /app
  fi
  java -jar jdTools.jar --server.port=80 --app.jd.version=11.0.2
}

start
