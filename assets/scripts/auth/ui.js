'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up succesfully')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in succesfully')
  $('#message').css('background-color', 'green')
  console.log(data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in, try again!')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const changePasswordSuccess = function () {
  $('#message').text('You have changed your password succesfully')
  $('#message').css('background-color', 'green')
  console.log('change password successfully')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const signOutSuccess = function () {
  $('#message').text('You have signed out succesfully')
  $('#message').css('background-color', 'green')
  console.log('Signed out successfully')
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
