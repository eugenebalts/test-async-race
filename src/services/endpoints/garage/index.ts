import { ERROR_MESSAGE } from '../../../constants';
import { ICar } from '../../../redux/store/slices/garage/types';
import api from '../../api';
import { CreateCarDto, UpdateCarDto } from './types';

class GarageApi {
  private readonly path: string = 'garage';

  async getCars(): Promise<ICar[]> {
    try {
      const { data } = await api.get(this.path);

      return data as ICar[];
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async getCarById(id: number): Promise<ICar> {
    try {
      const { data } = await api.get(`${this.path}/${id}`);

      return data as ICar;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async createCar(createCarDto: CreateCarDto): Promise<ICar> {
    try {
      const { data } = await api.post(this.path, createCarDto);

      return data as ICar;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async updateCar(id: number, updateCarDto: UpdateCarDto): Promise<ICar> {
    const path = `${this.path}/${id}`;

    try {
      const { data } = await api.put(path, updateCarDto);

      return data as ICar;
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
