import { ERROR_MESSAGE } from '../../../constants';
import { IWinner } from '../../../redux/store/slices/winners/types';
import getUnderscopedParams from '../../../utils/get-underscoped-params';
import api from '../../api';
import { GetWinnersParams, IGetWinnersResponse, UpdateWinnerDto } from './types';

class WinnersApi {
  private readonly path: string = 'winners';

  async getWinners(params: Partial<GetWinnersParams> = {}): Promise<IGetWinnersResponse> {
    const queryParams = getUnderscopedParams(params);

    try {
      const { data, headers } = await api.get(this.path, queryParams);

      const totalCount = headers.get('X-Total-Count');

      return {
        winners: data as IWinner[],
        total: Number(totalCount) ?? 0,
      };
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async getWinnerById(id: number): Promise<IWinner> {
    const path = `${this.path}/${id}`;

    try {
      const { data } = await api.get(path);

      return data as IWinner;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async createWinner(winnerData: IWinner): Promise<IWinner> {
    try {
      const { data } = await api.post(this.path, winnerData);

      return data as IWinner;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async updateWinner(id: number, updateWinnerDto: UpdateWinnerDto): Promise<IWinner> {
    const path = `${this.path}/${id}`;

    try {
      const { data } = await api.put(path, updateWinnerDto);

      return data as IWinner;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async deleteWinner(id: number): Promise<void> {
    const path = `${this.path}/${id}`;

    try {
      await api.delete(path);
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }
}

export default new WinnersApi();
