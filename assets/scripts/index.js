'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
})

// Step 1: Create Two Players
const playerOne = 'X'
const playerTwo = 'O'

const createBoard = ['', '', '', '', '', '', '', '', '']
// no storage of array and gameBoard to store current state
// const createBoard =

// Current player
let currentPlayer = playerOne

const playerTurn = function () {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
  } else {
    currentPlayer = playerOne
  }
}

const addTurnToBoard = function (i, currentPlayer) {
  if (createBoard[i] === 'X' || createBoard[i] === 'O') {
    return 'Sorry, this move has been made!'
  }
  createBoard[i] = currentPlayer
}

const checkIfWinner = function (createBoard) {
  if ((createBoard[0] === createBoard[1] && createBoard[1] === createBoard[2] && createBoard[0] !== '') ||
    (createBoard[0] === createBoard[3] && createBoard[3] === createBoard[6] && createBoard[1] !== '') ||
    (createBoard[0] === createBoard[4] && createBoard[4] === createBoard[8] && createBoard[2] !== '') ||
    (createBoard[1] === createBoard[4] && createBoard[4] === createBoard[7] && createBoard[7] !== '') ||
    (createBoard[2] === createBoard[5] && createBoard[5] === createBoard[8] && createBoard[8] !== '') ||
    (createBoard[3] === createBoard[4] && createBoard[4] === createBoard[5] && createBoard[5] !== '') ||
    (createBoard[6] === createBoard[7] && createBoard[7] === createBoard[8] && createBoard[9] + createBoard[4] !== '') ||
    (createBoard[6] === createBoard[4] && createBoard[4] === createBoard[2] && createBoard[6] + createBoard[3] !== '')) {
    console.log(currentPlayer, 'has won!')
    // createBoard = new Array(9).fill('')
    // console.log(createBoard)
    // // $('td').empty()
    // $('#winner-message').text(currentPlayer, 'has won!')
    // $('#winner-message').css('color', 'green')
    // else if saying if the indices in createBoard are equal to null, the game must continue to be played. Otherwise the else will run to display tie game.
  } else if (createBoard[0] === '' ||
                createBoard[1] === '' ||
                createBoard[2] === '' ||
                createBoard[3] === '' ||
                createBoard[4] === '' ||
                createBoard[5] === '' ||
                createBoard[6] === '' ||
                createBoard[7] === '' ||
            createBoard[8] === '') {
    console.log('Please proceed to next move')
  } else {
    return 'tie game'
  }
}

// const winner = function () {
//   $('#message').text(checkIfWinner)
//   $('#message').css('background-color', 'green')
// }

const tieGame = function () {
  if ((createBoard[0] !== '') &&
                (createBoard[1] !== '') &&
                (createBoard[2] !== '') &&
                (createBoard[3] !== '') &&
                (createBoard[4] !== '') &&
                (createBoard[5] !== '') &&
                (createBoard[6] !== '') &&
                (createBoard[7] !== '') &&
            (createBoard[8] !== '')) {
    console.log('tie game')
  }
}
const clickHandlers = () => {
  $('#top-left').on('click', function (event) {
    $('#top-left').text(currentPlayer)
    $(this).off(event)
    createBoard.splice(0, 1, currentPlayer)
    console.log(createBoard)
    // checkIfWinner(createBoard)
    playerTurn()
    tieGame()
  })

  $('#top-center').one('click', function () {
    $('#top-center').text(currentPlayer)
    createBoard.splice(1, 1, currentPlayer)
    console.log(createBoard)
    checkIfWinner(createBoard)
    playerTurn()
    tieGame()
  })

  $('#top-right').one('click', function () {
    $('#top-right').text(currentPlayer)

    createBoard.splice(2, 1, currentPlayer)
    console.log(createBoard)
    checkIfWinner(createBoard)
    playerTurn()
    tieGame()
  })

  $('#middle-left').one('click', function () {
    $('#middle-left').text(currentPlayer)
    createBoard.splice(3, 1, currentPlayer)
    console.log(createBoard)
    checkIfWinner(createBoard)
    playerTurn()
    tieGame()
  })

  $('#middle-center').one('click', function () {
    $('#middle-center').text(currentPlayer)
    createBoard.splice(4, 1, currentPlayer)
    console.log(createBoard)
    checkIfWinner(createBoard)
    playerTurn()
    tieGame()
  })

  $('#middle-right').one('click', function () {
    $('#middle-right').text(currentPlayer)
    createBoard.splice(5, 1, currentPlayer)
    console.log(createBoard)
    checkIfWinner(createBoard)
    playerTurn()
    tieGame()
  })

  $('#bottom-left').one('click', function () {
    $('#bottom-left').text(currentPlayer)
    createBoard.splice(6, 1, currentPlayer)
    console.log(createBoard)
    checkIfWinner(createBoard)
    playerTurn()
    tieGame()
  })

  $('#bottom-center').one('click', function () {
    $('#bottom-center').text(currentPlayer)
    createBoard.splice(7, 1, currentPlayer)
    console.log(createBoard)
    checkIfWinner(createBoard)
    playerTurn()
    tieGame()
  })

  $('#bottom-right').one('click', function () {
    $('#bottom-right').text(currentPlayer)
    createBoard.splice(8, 1, currentPlayer)
    console.log(createBoard)
    checkIfWinner(createBoard)
    playerTurn()
    tieGame()
  })
}
$(() => {
  clickHandlers()
})

module.exports = {
  clickHandlers
}
