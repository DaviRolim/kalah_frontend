import { IGameInfo } from 'src/interfaces/iGameInfo';
import { MutationTree } from 'vuex';
import { GameStateInterface } from './state';

const mutation: MutationTree<GameStateInterface> = {
  UPDATE_GAME_STATE(state, newState: IGameInfo) {
    state.gameInfo = { ...newState };
  },
};

export default mutation;
