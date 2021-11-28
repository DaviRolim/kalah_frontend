import { IGameInfo } from 'src/interfaces/iGameInfo';

export interface GameStateInterface {
  gameInfo: IGameInfo;
}

function state(): GameStateInterface {
  return {
    gameInfo: {
      gameId: 1,
      currentPlayer: 'PLAYER',
      gameOver: false,
      pits: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      player1Score: 0,
      player2Score: 0,
    },
  };
}

export default state;
