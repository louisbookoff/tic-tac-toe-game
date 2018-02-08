'use strict'

const config = require('../config')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    // key word
    data
  })
}

module.exports = {
  signUp
}
