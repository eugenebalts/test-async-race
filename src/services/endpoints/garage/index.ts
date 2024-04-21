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
      const res = await api.put(path, data);

      return res;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async deleteCar(id: number) {
    const path = `${this.path}/${id}`;

    try {
      await api.delete(path);

      return id;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}

export default new GarageApi();
