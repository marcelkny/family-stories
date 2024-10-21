#!/bin/bash

THIS_PATH=${BASH_SOURCE%/*}
cd "${THIS_PATH}"

docker compose up -d postgres-pgadmin vite_docker postgres