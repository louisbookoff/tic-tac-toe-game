'use strict'
// game is played in a 3x3 grid
// JS board will consist of a coordinate for each one of the 9 spaces on the board
// there are eight different ways to win the tic tac toe game
//

// Step 1: Create Two Players
const playerOne = 'X'
const playerTwo = 'O'

// Step 2: Create a JS Game Board
// Created array with empty strings for each space on the game board
// player 'X' goes first

// TODO: Should I keep the board empty or leave it with strings.

const createBoard = []

// const createBoard = ['', '', '', '', '', '', '', '']

// playerTurn function passes two arguments, the index # and the the playerturn
const addTurnToBoard = function (i, player) {
  if (createBoard[i] === 'X' || createBoard[i] === 'O') {
    return 'Sorry, this move has been made!'
  } createBoard[i] = player
  console.log(createBoard) // X or O and the proper index place
}

// potentially player can be an array of players
// since x and o always switch, we know if the length of the board is 0 then it's x's turn (because x goes first)
// if the length is an odd number, it's o's turn
// so if gameBoard.length === 0
// then you choose X to go, probably by accessing players[0]

// TODO: PLace this in the correct area

// Current player
let currentPlayer = playerOne

// PlayerTurn function allows game to swithc between playerOne ('X') and playerTwo ('O')
const playerTurn = function () {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
  } else {
    currentPlayer = playerOne
  }
}

// This function serves to checking different winning patterns and alert user whether it is a win, tie, or continue game
const checkIfWinner = function (move) {
  if ((move[0] === move[1] === move[2]) ||
    (move[0] === move[4] === move[8]) ||
    (move[0] === move[3] === move[6]) ||
    (move[1] === move[4] === move[7]) ||
    (move[2] === move[5] === move[8]) ||
    (move[3] === move[4] === move[5]) ||
    (move[6] === move[7] === move[8]) ||
    (move[2] === move[4] === move[6])) {
    return 'game over'
  } else if (checkIfWinner.length >= 9) {
    console.log('tie')
  } else {
    console.log('next move')
  }
}

// IGNORE
// const playerOTurn = function (i) {
//   createBoard[i] = PlayerTwo
//   console.log(createBoard)
// }

// const createBoardTwo = [1, 2, 3, 4, 5, 6, 7, 8]
// here is the game board according to array also matches index positions for simplicity
// 0 1 2
// 3 4 5
// // 6 7 8
// console.log(createBoard)

module.exports = {
  playerTurn
}
