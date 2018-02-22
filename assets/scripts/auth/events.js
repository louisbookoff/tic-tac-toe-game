'use strict'

const api = require('./api')
const getFormFields = require('.../../../lib/get-form-fields')
const ui = require('./ui')
const gameEngine = require('../gamelogic')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateGame = function () {
  event.preventDefault()
  api.createGames()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  gameEngine.createBoard = new Array(9).fill('')
  gameEngine.players.currentPlayer = gameEngine.playerOne
}

const onUpdateGames = function (event) {
  event.preventDefault()
  // get board position
  const attribute = $(event.target).attr('id')
  // if spot is taken
  // console.log(gameEngine.createBoard)
  // console.log('this is the ', attribute)
  if (gameEngine.createBoard[attribute] !== '') {
    // console.log('Shouldnt do anything')
    // message that spot is taken
    $('#message').text('This spot is taken, try again!')
    $('#message').css('background-color', 'red')
  } else {
    // add player token to board array
    // console.log('Should do something')
    gameEngine.createBoard[attribute] = gameEngine.players.currentPlayer
    // console.log('Value is ', gameEngine.createBoard)
    // add player token to board UI
    $(event.target).text(gameEngine.players.currentPlayer)

    // iterating player turn
    gameEngine.playerTurn()

    // checking winner
    const won = gameEngine.checkIfWinner(gameEngine.createBoard)

    // // what does this do?
    gameEngine.inGameMessages(gameEngine.createBoard)

    // structure data for api
    const data = {
      game: {
        cell: {
          'index': attribute,
          'value': gameEngine.players.currentPlayer
        },
        over: won
      }
    }

    // send data to api method
    api.updateGames(data)
  }
}

const onGetGames = function () {
  event.preventDefault()
  api.getAllGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
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
  addHandlers
}
