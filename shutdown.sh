#!/bin/bash

THIS_PATH=${BASH_SOURCE%/*}
cd "${THIS_PATH}"

docker compose down --remove-orphans