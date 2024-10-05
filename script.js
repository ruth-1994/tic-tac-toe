const Player = () => {};

const gameBoard = () => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const setMove = (index, mark) => {
    if (board[index] == "") {
      board[index] = mark;
    } else {
      return false;
    }
  };
  const updateBoard = () => {
    return board = ["", "", "", "", "", "", "", "", ""];
  };
  return {
    getBoard,
    setMove,
    updateBoard,
  };
};
