import { IGameInfo } from 'src/interfaces/iGameInfo';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { GameStateInterface } from './state';

const actions: ActionTree<GameStateInterface, StateInterface> = {
  updateGameInfo({ commit }, gameInfo: IGameInfo) {
    // console.log(gameInfo);
    commit('UPDATE_GAME_STATE', gameInfo);
  },
};

export default actions;
