#!/bin/bash

# sh scripts game/create-game.sh

curl --include --request POST "http://tic-tac-toe.wdibos.com/games/" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "id": "'"${3}"'",
      "cells": "'"${ARRAY}"'",
      "over": "'"${FALSE}"'",
      "player_x": {
        "id": "'"${1}"'",
        "email": "'"${EMAIL}"'"
      },
      "player_o": "'"${NULL}"'"
    }
  }'

echo
