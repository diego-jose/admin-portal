#!/bin/sh

set -e

#build stryker image
docker build -t stryker .

#run stryker image and execute mutation tests
docker run --volume $(pwd)/reports:/app/reports:Z stryker
