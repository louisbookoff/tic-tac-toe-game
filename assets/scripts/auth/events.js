'use strict'

const api = require('./api')
const getFormFields = require('.../../../lib/get-form-fields')
const ui = require('./ui')
const gameEngine = require('../gamelogic')
const gamePlayer = require('./events')

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
}

const onUpdateGames = function (event) {
  event.preventDefault()
  $(event.target).text(gameEngine.players.currentPlayer)

  const attribute = $(this).attr('id')
  console.log('hit')
  $(this).off()
  console.log(gameEngine.players.currentPlayer)
  gameEngine.createBoard[attribute] = gameEngine.players.currentPlayer

  // iterating player turn
  gameEngine.playerTurn()

  // checking winner
  const won = gameEngine.checkIfWinner(gameEngine.createBoard)
  gameEngine.inGameMessages(gameEngine.createBoard)
  const data = {
    game: {
      cell: {
        'index': attribute,
        'value': gameEngine.players.currentPlayer
      },
      over: won
    }
  }
  api.updateGames(data)
}

// const preventClick = function () {
//   if ((gameEngine.createBoard[0] === '' || gameEngine.createBoard[0] === 'O') ||
//   (gameEngine.createBoard[1] === 'X' || gameEngine.createBoard[1] === 'O') ||
//                 (gameEngine.createBoard[2] === 'X' || gameEngine.createBoard[2] === 'O') ||
//                 (gameEngine.createBoard[3] === 'X' || gameEngine.createBoard[3] === 'O') ||
//                 (gameEngine.createBoard[4] === 'X' || gameEngine.createBoard[4] === 'O') ||
//                 (gameEngine.createBoard[5] === 'X' || gameEngine.createBoard[5] === 'O') ||
//                 (gameEngine.createBoard[6] === 'X' || gameEngine.createBoard[6] === 'O') ||
//                 (gameEngine.createBoard[7] === 'X' || gameEngine.createBoard[7] === 'O') ||
//             (gameEngine.createBoard[8] === 'X' || gameEngine.createBoard[7] === 'O')) {
//     return true
//   } else {
//     return false
//   }
// }

// try to prevent duplicate clicks
// $(document).ready(function () {
//   $('.boardspot').dblclick(function () {
//     $(this).attr('disabled', true)
//     return false
//   })
// })

const onGetGames = function () {
  event.preventDefault()
  api.getAllGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const createBoardSpotClickHandlers = function () {
  $('.boardspot').on('click', onUpdateGames)
}

const addHandlers = () => {
  $('.signup-form').on('submit', onSignUp)
  $('.signin-form').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('.create-game').on('click', onCreateGame)
  createBoardSpotClickHandlers()
  $('.game-stats').on('click', onGetGames)
}

module.exports = {
  addHandlers,
  createBoardSpotClickHandlers
}
