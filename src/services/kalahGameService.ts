/* eslint-disable  */
import { AxiosResponse } from 'axios';
import { api } from 'boot/axios';
import { IGameInfo } from 'src/interfaces/iGameInfo';

export function startGame(): Promise<AxiosResponse<IGameInfo>> {
  return api.get(`${process.env.API!}/start`);
}
