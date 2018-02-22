'use strict'
// game is played in a 3x3 grid
// JS board will consist of a coordinate for each one of the 9 spaces on the board
// there are eight different ways to win the tic tac toe game

const inGameMessages = function (createBoard) {
  if ((createBoard[0] === createBoard[1] && createBoard[1] === createBoard[2] && createBoard[2] !== '') ||

// Vertical left column
// 0,3,6
(createBoard[0] === createBoard[3] && createBoard[3] === createBoard[6] && createBoard[3] !== '') ||

// Diagonal top left to bottom right
// 0,4,8
(createBoard[0] === createBoard[4] && createBoard[4] === createBoard[8] && createBoard[8] !== '') ||

// Vertical middle column
// 1,4,7
(createBoard[1] === createBoard[4] && createBoard[4] === createBoard[7] && createBoard[7] !== '') ||

// Vertical right column
// 2,5,8
(createBoard[2] === createBoard[5] && createBoard[5] === createBoard[8] && createBoard[5] !== '') ||

// Horizontal middle row
// 3,4,5
(createBoard[3] === createBoard[4] && createBoard[4] === createBoard[5] && createBoard[4] !== '') ||

// Horizontal bottom row
// 6,7,8
(createBoard[6] === createBoard[7] && createBoard[7] === createBoard[8] && createBoard[7] !== '') ||

// Diagonal bottom left to top right
// 6,4,2
(createBoard[6] === createBoard[4] && createBoard[4] === createBoard[2] && createBoard[6] !== '')) {
    playerTurn()
    const messageText = 'the winner is ' + players.currentPlayer
    $('#message').text(messageText)
    $('#message').css('background-color', 'white')
  } else if
  (createBoard[0] === '' ||
                createBoard[1] === '' ||
                createBoard[2] === '' ||
                createBoard[3] === '' ||
                createBoard[4] === '' ||
                createBoard[5] === '' ||
                createBoard[6] === '' ||
                createBoard[7] === '' ||
            createBoard[8] === '') {
    $('#message').text('Next Turn!')
    $('#message').css('background-color', 'red')
  } else {
    $('#message').text('TIE!')
    $('#message').css('background-color', 'red')
  }
}

// Step 1: Create Two Players
const players = {
  currentPlayer: null
}

const playerOne = 'X'
const playerTwo = 'O'

players.currentPlayer = playerOne

const createBoard = ['', '', '', '', '', '', '', '', '']
// no storage of array and gameBoard to store current state
// const createBoard =

const playerTurn = function () {
  if (players.currentPlayer === playerOne) {
    players.currentPlayer = playerTwo
  } else {
    players.currentPlayer = playerOne
  }
  console.log('current player is', players.currentPlayer)
}

// const addTurnToBoard = function (i, currentPlayer) {
//   if (createBoard[i] === 'X' || createBoard[i] === 'O') {
//     return 'Sorry, this move has been made!'
//   }
//   createBoard[i] = currentPlayer
// }

let returnCondition = true

const checkIfWinner = function (createBoard) {
  // Horizontal top row
// 0,1,2
  if ((createBoard[0] === createBoard[1] && createBoard[1] === createBoard[2] && createBoard[2] !== '') ||

// Vertical left column
// 0,3,6
(createBoard[0] === createBoard[3] && createBoard[3] === createBoard[6] && createBoard[3] !== '') ||

// Diagonal top left to bottom right
// 0,4,8
(createBoard[0] === createBoard[4] && createBoard[4] === createBoard[8] && createBoard[8] !== '') ||

// Vertical middle column
// 1,4,7
(createBoard[1] === createBoard[4] && createBoard[4] === createBoard[7] && createBoard[7] !== '') ||

// Vertical right column
// 2,5,8
(createBoard[2] === createBoard[5] && createBoard[5] === createBoard[8] && createBoard[5] !== '') ||

// Horizontal middle row
// 3,4,5
(createBoard[3] === createBoard[4] && createBoard[4] === createBoard[5] && createBoard[4] !== '') ||

// Horizontal bottom row
// 6,7,8
(createBoard[6] === createBoard[7] && createBoard[7] === createBoard[8] && createBoard[7] !== '') ||

// Diagonal bottom left to top right
// 6,4,2
(createBoard[6] === createBoard[4] && createBoard[4] === createBoard[2] && createBoard[6] !== '')) {
    returnCondition = true
    $('.game-board').toggleClass('hidden')
    // $('.boardspot').off('click')
    // createBoard = new Array(9).fill('')
    // console.log(createBoard)
    /// $('td').empty()
    // $('#winner-message').text(!== currentPlayer, 'has won!')
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
    returnCondition = false
  } else {
    returnCondition = false
  }
  return returnCondition
}

// potentially player can be an array of players
// since x and o always switch, we know if the length of the board is 0 then it's x's turn (because x goes first)
// if the length is an odd number, it's o's turn
// so if gameBoard.length === 0
// then you choose X to go, probably by accessing players[0]

module.exports = {
  checkIfWinner,
  createBoard,
  playerTurn,
  playerOne,
  playerTwo,
  players,
  inGameMessages
}
