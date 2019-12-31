#!/usr/bin/env bash

 echo "Building the HIS SOCI app"
 #yarn build-dev
 echo "Preparing the install app files"
 if [ -d "./build" ]; then
   cd build
   cp manifest.json manifest.webapp
   rsync -ravz  static/images static
   echo "packaging the file as zip"
   zip -r his_soci.zip * -x "asset-manifest.json"
   cd ..
   echo "####### Syncing distribution files ######"
   rsync --delete -arvz --exclude "asset-manifest.json" build/ dist
   cd ..
 else
   echo "Build failed"
 fi
