const gameEngine = require('../gamelogic')

const updateGameBoard = function () {
  $(this).text(gameEngine.players.currentPlayer)
  $(this).off()
  console.log(gameEngine.players.currentPlayer)
  const gamePlayer = $(this).attr('id')
  gameEngine.createBoard[gamePlayer] = gameEngine.players.currentPlayer
  gameEngine.playerTurn()
  gameEngine.checkIfWinner(gameEngine.createBoard)
}

const clickHandlers = () => {
  $('.game-board td').on('click', updateGameBoard)
}
module.exports = {
  updateGameBoard,
  clickHandlers
}
