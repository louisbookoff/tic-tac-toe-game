'use strict'
const store = require('../store')
const events = require('./events')
const signUpSuccess = function (data) {
  $('#message').text('Signed up succesfully')
  $('#message').css('background-color', 'green')
  $('.close').click()
  // console.log(data)
}

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
  $('#pageone').toggleClass('hidden')
  $('.close').click()
}
const signInFailure = function (error) {
  $('#message').text('Error on sign in, try again!')
  $('#message').css('background-color', 'red')
  console.error(error)
}
const changePasswordSuccess = function () {
  $('#message').text('You have changed your password succesfully')
  $('#message').css('background-color', 'green')
  // console.log('change password successfully')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const signOutSuccess = function () {
  $('#message').text('You have signed out succesfully')
  $('#message').css('background-color', 'green')
  $('#game-page').toggleClass('hidden')
  $('#pageone').removeClass('hidden')
  // console.log('Signed out successfully')
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const createGameSuccess = function (data) {
  // console.log('new game data is', data)
  $('#message').text('success on create game')
  $('#message').css('background-color', 'green')
  // $('td').empty()
  console.log(events)
  $('.boardspot').on('click', events.createBoardSpotClickHandlers)
  $('td').empty()
  store.game = data.game
}

const createGameFailure = function () {
  $('#message').text('Error on create game')
  $('#message').css('background-color', 'red')
  // console.error('create game failure')
}

const getGamesSuccess = function (data) {
  $('.card-text').text('Games played ' + data.games.length)
  $('.card-text').css('color', '$sunsetorange')
}

const getGamesFailure = function (data) {
  $('.card-text').text('Check your internet connection could not get games')
  $('.card-text').css('color', 'red')
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
  getGamesSuccess,
  getGamesFailure
}
