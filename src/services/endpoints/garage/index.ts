import { Car } from '../../../redux/store/slices/garage/types';
import api from '../../api';
import { CreateCarDto, UpdateCarDto } from './types';

class GarageApi {
  private readonly path: string = 'garage';

  async getCars(): Promise<Car[]> {
    try {
      const res = await api.get(this.path);

      return res as Car[];
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async createCar(data: CreateCarDto): Promise<Car> {
    try {
      const res = await api.post(this.path, data);

      return res as Car; 
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async updateCar(id: number, data: UpdateCarDto): Promise<Car> {
    const path = `${this.path}/${id}`;

    try {
      const res = await api.put(path, data);

      return res as Car;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async deleteCar(id: number): Promise<number> {
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
