import { ERROR_MESSAGE } from '../../../constants';
import { ICar } from '../../../redux/store/slices/garage/types';
import api from '../../api';
import { CreateCarDto, UpdateCarDto } from './types';

class GarageApi {
  private readonly path: string = 'garage';

  async getCars(): Promise<ICar[]> {
    try {
      const response = await api.get(this.path);

      return response as ICar[];
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async createCar(data: CreateCarDto): Promise<ICar> {
    try {
      const response = await api.post(this.path, data);

      return response as ICar;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async updateCar(id: number, data: UpdateCarDto): Promise<ICar> {
    const path = `${this.path}/${id}`;

    try {
      const response = await api.put(path, data);

      return response as ICar;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async deleteCar(id: number): Promise<number> {
    const path = `${this.path}/${id}`;

    try {
      await api.delete(path);

      return id;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }
}

export default new GarageApi();
