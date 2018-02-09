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
      $('#message').text('You have succesfully signed up')
      $('#message').css('background-color', 'green')
      console.log(data)
    })
    .catch(function (error) {
      $('#message').text('Sign up had an issue')
      $('#message').css('background-color', 'red')
      console.error(error)
    })
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log('data is ', data)

  api.signIn(data)
    .then(function (data) {
      $('#message').text('You have succesfully signed up')
      $('#message').css('background-color', 'green')
      console.log(data)
    })
    .catch(function (error) {
      $('#message').text('Sign in had an issue')
      $('#message').css('background-color', 'red')
      console.error(error)
    })
}

const addHandlers = () => {
  $('.signup-form').on('submit', onSignUp)
  $('.signin-form').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
