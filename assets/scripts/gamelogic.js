'use strict'
// game is played in a 3x3 grid
// JS board will consist of a coordinate for each one of the 9 spaces on the board
// there are eight different ways to win the tic tac toe game

// Step 1: Create Two Players
const playerOne = 'X'
const playerTwo = 'O'

// Step 2: Create a JS Game Board
// Created array with empty strings for each space on the game board
// player 'X' goes first

// TODO: Should I keep the board empty or leave it with strings.

const createBoard = []
// no storage of array and gameBoard to store current state
// const createBoard = ['', '', '', '', '', '', '', '']

// Current player
let currentPlayer = playerOne

// PlayerTurn function allows game to switch between playerOne ('X') and playerTwo ('O')
const playerTurn = function () {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
  } else {
    currentPlayer = playerOne
  }
  // TODO: comment out of delete console.log
  console.log(currentPlayer) // when function is invoked, it swithches the players turn --> starts with playerOne = 'X'
}

// This function serves to checking different winning patterns and alert user whether it is a win, tie, or continue game
const checkIfWinner = function (createBoard) {
  if ((createBoard[0] === createBoard[4] && createBoard[4] === createBoard[8] && createBoard[0] !== undefined) ||
    (createBoard[0] === createBoard[3] && createBoard[3] === createBoard[6] && createBoard[0] !== undefined) ||
    (createBoard[0] === createBoard[1] && createBoard[1] === createBoard[2] && createBoard[0] !== undefined) ||
    (createBoard[1] === createBoard[4] && createBoard[4] === createBoard[7] && createBoard[1] !== undefined) ||
    (createBoard[2] === createBoard[5] && createBoard[5] === createBoard[8] && createBoard[2] !== undefined) ||
    (createBoard[3] === createBoard[4] && createBoard[4] === createBoard[5] && createBoard[3] !== undefined) ||
    (createBoard[6] === createBoard[7] && createBoard[7] === createBoard[8] && createBoard[6] !== undefined) ||
    (createBoard[2] === createBoard[4] && createBoard[4] === createBoard[6] && createBoard[2] !== undefined)) {
    console.log('Woo there is a winner but we arent sure who')
    // eslse if saying if the indices in createBoard are equal to null, the game must continue to be played. Otherwise the else will run to display tie game.
  } else if (createBoard[0] == null ||
                createBoard[1] == null ||
                createBoard[2] == null ||
                createBoard[3] == null ||
                createBoard[4] == null ||
                createBoard[5] == null ||
                createBoard[6] == null ||
                createBoard[7] == null ||
            createBoard[8] == null) {
    console.log('Please proceed to next move')
  } else {
    console.log('tie game woo!')
  }
}

// allows move to be made and check's to see if space is already filled by a turn.  If so returns move has been made
const addTurnToBoard = function (i, currentPlayer) {
  if (createBoard[i] === 'X' || createBoard[i] === 'O') {
    return 'Sorry, this move has been made!'
  }
  createBoard[i] = currentPlayer
  playerTurn() // allow turns to switch between 'X' and 'O'
  checkIfWinner(createBoard)
  console.log(createBoard) // X or O and the proper index place
}

// potentially player can be an array of players
// since x and o always switch, we know if the length of the board is 0 then it's x's turn (because x goes first)
// if the length is an odd number, it's o's turn
// so if gameBoard.length === 0
// then you choose X to go, probably by accessing players[0]

module.exports = {
  addTurnToBoard,
  checkIfWinner,
  createBoard
}
