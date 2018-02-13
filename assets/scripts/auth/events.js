'use strict'

const api = require('./api')
const getFormFields = require('.../../../lib/get-form-fields')
const ui = require('./ui')
const gameEngine = require('../gamelogic')
const gamePlayer = require('./events')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log('data is ', data)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log('data is ', data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log('data is ', data)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log('data is ', data)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateGame = function () {
  event.preventDefault()

  api.createGames()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGames = function () {
  event.preventDefault()
  console.log(event.target)
  const attribute = $(this).attr('id')
  const data = {
    game: {
      cell: {
        'index': attribute,
        'value': gameEngine.players.currentPlayer
      }
    },
    'over': gameEngine.checkIfWinner(gameEngine.createBoard)
  }

  api.updateGames(data)

  console.log(onUpdateGames)
}

const onGetGames = function () {
  event.preventDefault()
  api.getAllGames()
  console.log(onGetGames())
  // .then(ui.GetGamesSuccess)
}

const addHandlers = () => {
  $('.signup-form').on('submit', onSignUp)
  $('.signin-form').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('.create-game').on('click', onCreateGame)
  $('.boardspot').on('click', onUpdateGames)
  $('.game-stats').on('click', onGetGames)
}

module.exports = {
  addHandlers,
  onGetGames
}
