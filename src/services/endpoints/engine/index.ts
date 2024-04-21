import api from '../../api';
import { StartEngineResponse } from './types';

class EngineApi {
  private readonly path: string = 'engine';

  async startEngine(id: number): Promise<StartEngineResponse> {
    try {
      const res = await api.patch(this.path, {}, {id: String(id), status: 'started'})

      return res as StartEngineResponse;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

}

export default new EngineApi();