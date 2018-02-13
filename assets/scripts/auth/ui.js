'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up succesfully')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const signUpReset = function () {
  $('.modal-fade').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
  })
}

// const signInUi = function () {
//   if (signUpSuccess) {
//     $('#in-button').click(function () {
//       $('.gamePage').toggle('slow')
//       $('#first-page').toggle('slow')
//       $('#message').off('text')
//     })
//   } else {
//     console.log('try again idiot')
//   }
// }

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in succesfully')
  $('#message').css('background-color', 'green')
  $('#game-page').removeClass('hidden')
  console.log(data)
  store.user = data.user
  // $('#pageone').toggleClass('hidden')
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

const createGameSuccess = function (data) {
  console.log('new game data is', data)
  $('#message').text('success on create game')
  $('#message').css('background-color', 'green')
  console.log('create game successful')
  store.game = data.game
}

const createGameFailure = function () {
  $('#message').text('Error on create game')
  $('#message').css('background-color', 'red')
  console.error('create game failure')
}

const getGamesSuccess = function (data) {
  $('.card-text').text('Games played ' + data.games.length)
  $('.card-text').css('color', '$sunsetorange')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  signUpReset,
  getGamesSuccess
}
