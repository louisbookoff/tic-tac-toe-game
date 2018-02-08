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
  console.log(currentPlayer) // when function is invoked, it swithches the players turn --> starts with playerOne = 'X'
}
// allows move to be made and check's to see if space is already filled by a turn.  If so returns move has been made
const addTurnToBoard = function (i, currentPlayer) {
  if (createBoard[i] === 'X' || createBoard[i] === 'O') {
    return 'Sorry, this move has been made!'
  }
  createBoard[i] = currentPlayer
  playerTurn()
  console.log(createBoard) // X or O and the proper index place
}

// potentially player can be an array of players
// since x and o always switch, we know if the length of the board is 0 then it's x's turn (because x goes first)
// if the length is an odd number, it's o's turn
// so if gameBoard.length === 0
// then you choose X to go, probably by accessing players[0]

// This function serves to checking different winning patterns and alert user whether it is a win, tie, or continue game
const checkIfWinner = function (createBoard) {
  if ((createBoard[0] === createBoard[1] && createBoard[1] === createBoard[2] && createBoard[0] !== undefined) ||
    (createBoard[0] === createBoard[4] && createBoard[4] === createBoard[8] && createBoard[0] !== undefined) ||
    (createBoard[0] === createBoard[3] && createBoard[3] === createBoard[6] && createBoard[0] !== undefined) ||
    (createBoard[1] === createBoard[4] && createBoard[4] === createBoard[7] && createBoard[1] !== undefined) ||
    (createBoard[2] === createBoard[5] && createBoard[5] === createBoard[8] && createBoard[2] !== undefined) ||
    (createBoard[3] === createBoard[4] && createBoard[4] === createBoard[5] && createBoard[3] !== undefined) ||
    (createBoard[6] === createBoard[7] && createBoard[7] === createBoard[8] && createBoard[6] !== undefined) ||
    (createBoard[2] === createBoard[4] && createBoard[4] === createBoard[6] && createBoard[2] !== undefined)) {
    console.log('This winnner is', currentPlayer)
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

createBoard.every(checkIfWinner([]))

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
