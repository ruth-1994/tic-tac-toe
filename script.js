const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const setMove = (index, mark) => {
    if (board[index] == "") {
      board[index] = mark;
    } else {
      return false;
    }
  };
  const resetBoard = () => {
    return (board = ["", "", "", "", "", "", "", "", ""]);
  };
  return {
    getBoard,
    setMove,
    resetBoard,
  };
})();

const Player = (name, mark) => {
  return {
    name,
    mark,
  };
};

const gameFlowController = (() => {
  const players = [];
  const currentPlayerIndex = 0;
  const gameboard = gameBoard();

  const playerInitialization = (player1, player2) => {
    players = [
      { name: player1, mark: "X" },
      { name: player2, mark: "O" },
    ];
  };
  const playMove = (index) => {
    if (gameboard.board[index] == "") {
      const currentPlayer = players[currentPlayerIndex];
      gameboard.setMove(index, currentPlayer.mark);
    } else {
     return false;
    }
  };
})();
