import { IWinner } from '../../../redux/store/slices/winners/types';
import api from '../../api';
import { UpdateWinnerDto } from './types';

class WinnersApi {
  private readonly path: string = 'winners';

  async getWinners() {
    try {
      const res = await api.get(this.path);

      return res as IWinner[];
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to get winners');
    }
  }

  async getWinnerById(id: number) {
    const path = `${this.path}/${id}`;
      
    try {
      const res = await api.get(path);

      return res as IWinner;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to get winner');
    }
  }

  async createWinner(data: IWinner) {
    try {
      const res = await api.post(this.path, data);

      return res as IWinner;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to create winner');
    }
  }

  async updateWinner(id: number, data: UpdateWinnerDto) {
    const path = `${this.path}/${id}`;

    try {
      const res = await api.put(path, data);

      return res as IWinner;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to update winner');
    }
  }
}

export default new WinnersApi();
