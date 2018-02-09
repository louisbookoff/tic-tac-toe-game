'use strict'

const api = require('./api')
const getFormFields = require('.../../../lib/get-form-fields')
const store = require('../store')
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
  console.log(data)
  api.signIn(data)
    .then(function (data) {
      $('#message').text('You have succesfully signed up')
      $('#message').css('background-color', 'green')
      store.user = data.user
    })
    .catch(function (error) {
      $('#message').text('Sign in had an issue')
      $('#message').css('background-color', 'red')
      console.error(error)
    })
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log('data is ', data)

  api.changePassword(data)
    .then(function (data) {
      $('#message').text('You have succesfully changed your password!')
      $('#message').css('background-color', 'green')
      console.log(data)
    })
    .catch(function (error) {
      $('#message').text('Your password could not be change, error!')
      $('#message').css('background-color', 'red')
      console.error(error)
    })
}

const onSignOut = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log('data is ', data)

  api.signOut(data)
    .then(function (data) {
      $('#message').text('You have succesfully signed out!')
      $('#message').css('background-color', 'green')
      console.log(data)
    })
    .catch(function (error) {
      $('#message').text('You could not sign out!')
      $('#message').css('background-color', 'red')
      console.error(error)
    })
}

const addHandlers = () => {
  $('.signup-form').on('submit', onSignUp)
  $('.signin-form').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
