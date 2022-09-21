#!/usr/bin/env bash
 echo "Building the HISSOCI app"
 echo "Preparing the install app files"
 if [ -d "./build" ]; then
   cd build
   cp manifest.json manifest.webapp
   echo "packaging the file as zip"
   zip -r hissoci.zip *
 else
   echo "Build failed"
 fi
