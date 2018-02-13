#!/bin/bash

# sh game/get-games.sh

curl "https://aqueous-atoll-85096.herokuapp.com/games" \
--include \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
    "game": {
      "id": "'"${ID}"'"
      "cells": "'"${CELLS}"'"
      "over": "'"${OVER}"'"
      "player_x": {
        "id": "'"${1}"'"
        "email": "'"${EMAIL}"'"
      },
      "player_o"
      "id": "'"1"'"
      "email":
    }'
