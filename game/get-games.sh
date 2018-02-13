#!/bin/bash

# sh game/get-games.sh

curl "https://aqueous-atoll-85096.herokuapp.com/games?over=true" \
--include \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"
