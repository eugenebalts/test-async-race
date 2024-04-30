import { ERROR_MESSAGE } from '../../../constants';
import { IWinner } from '../../../redux/store/slices/winners/types';
import api from '../../api';
import { UpdateWinnerDto } from './types';

class WinnersApi {
  private readonly path: string = 'winners';

  async getWinners(): Promise<IWinner[]> {
    try {
      const response = await api.get(this.path);

      return response as IWinner[];
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async getWinnerById(id: number): Promise<IWinner> {
    const path = `${this.path}/${id}`;

    try {
      const response = await api.get(path);

      return response as IWinner;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async createWinner(data: IWinner): Promise<IWinner> {
    try {
      const response = await api.post(this.path, data);

      return response as IWinner;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async updateWinner(id: number, data: UpdateWinnerDto): Promise<IWinner> {
    const path = `${this.path}/${id}`;

    try {
      const response = await api.put(path, data);

      return response as IWinner;
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
