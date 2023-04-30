import { COMBO_WINNER } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  //revisamos todas las combinaciones ganadoras
  //para ver si X u O ganó
  for (const combo of COMBO_WINNER) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //Si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  //revisamos si hay un empate
  //si no hay más espacios vacíos
  //en el tablero
  return newBoard.every((square) => square != null);
};
