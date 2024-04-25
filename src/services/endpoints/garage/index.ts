import { ICar } from '../../../redux/store/slices/garage/types';
import api from '../../api';
import { CreateCarDto, UpdateCarDto } from './types';

class GarageApi {
  private readonly path: string = 'garage';

  async getCars(): Promise<ICar[]> {
    try {
      const res = await api.get(this.path);

      return res as ICar[];
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to get cars');
    }
  }

  async createCar(data: CreateCarDto): Promise<ICar> {
    try {
      const res = await api.post(this.path, data);

      return res as ICar;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to create car');
    }
  }

  async updateCar(id: number, data: UpdateCarDto): Promise<ICar> {
    const path = `${this.path}/${id}`;

    try {
      const res = await api.put(path, data);

      return res as ICar;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to update car');
    }
  }

  async deleteCar(id: number): Promise<number> {
    const path = `${this.path}/${id}`;

    try {
      await api.delete(path);

      return id;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to delete car');
    }
  }
}

export default new GarageApi();
