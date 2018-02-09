'use strict'

const api = require('./api')
const getFormFields = require('.../../../lib/get-form-fields')
// const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log('data is ', data)
  api.signUp(data)
    .then(function (data) {
      $('#signUp-message').text('You have succesfully signed up')
      $('#signUp-message').css('background-color', 'green')
      console.log(data)
    })
    .catch(function (error) {
      $('#signUp-message').text('Sign up had an issue')
      $('#signUp-message').css('background-color', 'red')
      console.error(error)
    })
}

const addHandlers = () => {
  $('.signup-form').on('submit', onSignUp) // whatever it's called
}

module.exports = {
  addHandlers
}
