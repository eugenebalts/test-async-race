import api from '../../api';
import { CreateCarDto, UpdateCarDto } from './types';

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

  async createCar(data: CreateCarDto) {
    try {
      const res = await api.post(this.path, data);

      return res;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async updateCar(id: number, data: UpdateCarDto) {
    const path = `${this.path}/${id}`;

    try {
      const res = await api.patch(path, data, {
        id: String(id), // According to async-race-api url param 'id' is required despite the fact that it's in the path
      });

      return res;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}

export default new GarageApi();
