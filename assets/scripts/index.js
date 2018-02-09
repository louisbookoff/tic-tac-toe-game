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

const createBoard = []
// no storage of array and gameBoard to store current state
// const createBoard = ['', '', '', '', '', '', '', '']

// Current player
let currentPlayer = playerOne

const playerTurn = function () {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
  } else {
    currentPlayer = playerOne
  }

  const clickHandlers = () => {
    $('#top-left').on('click', function () {
      $('#top-left').text(playerTurn)
    })
    $('#top-center').on('click', function () {
      $('#top-center').text('X')
    })
    $('#top-right').on('click', function () {
      $('#top-right').text('X')
    })
    $('#middle-left').on('click', function () {
      $('#middle-left').text('X')
    })
    $('#middle-center').on('click', function () {
      $('#middle-center').text('X')
    })
    $('#middle-right').on('click', function () {
      $('#middle-right').text('X')
    })
    $('#bottom-left').on('click', function () {
      $('#bottom-left').text('X')
    })
    $('#bottom-center').on('click', function () {
      $('#bottom-center').text('X')
    })
    $('#bottom-right').on('click', function () {
      $('#bottom-right').text('X')
    })
  }
}

module.exports = {
}
