import api from '../../api';
import { DriveModeResponse, StartEngineResponse } from './types';

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

  async driveMode(id: number): Promise<DriveModeResponse> {
    try {
      const res = await api.patch(this.path, {}, {id: String(id), status: 'drive'})

      return res as DriveModeResponse;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

}

export default new EngineApi();