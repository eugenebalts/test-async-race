import api from '../../api';
import { CreateCar } from './types';

class GarageApi {
  private readonly path: string = 'garage';

  async getCars() {
    try {
      const res = await api.get(this.path);

      return res;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async createCar(data: CreateCar) {
    try {
      const res = await api.post(this.path, data);

      return res;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}

export default new GarageApi();
