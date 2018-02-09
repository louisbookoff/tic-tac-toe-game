'use strict'

const config = require('../config')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

module.exports = {
  signUp,
  signIn
}
