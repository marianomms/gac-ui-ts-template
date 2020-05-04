#!/bin/bash

RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

set -e

# Checks if ./id_rsa exists in the root of this repo.
# If not then a message is displayed to the user and the script exits.
function check_for_id_rsa() {
  if [ ! -e './id_rsa' ]
  then
    echo -e "${RED}The file ./id_rsa was not found. A private key is required for cloning Git repos.${NC}"
    echo -e "${BLUE}Please copy a private key into the root of this repo and name the file id_rsa."
    echo -e "For example:${NC}"
    echo -e "\tcp ~/.ssh/my_private_key ./id_rsa"
    exit 1
  fi
}

check_for_id_rsa
docker build -t gac-ui-ts .
docker run --rm gac-ui-ts bash -c 'cat package-lock.json' > package-lock.json
echo
echo -e "✅  Booted new gac-ui-ts Docker container...\n"
docker-compose run --rm --service-ports gac-ui-ts