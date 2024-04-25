import api from '../../api';
import { IDriveModeResponse, IStartEngineResponse, StopEngineResponse } from './types';

class EngineApi {
  private readonly path: string = 'engine';

  async startEngine(id: number): Promise<IStartEngineResponse> {
    try {
      const res = await api.patch(this.path, {}, { id: String(id), status: 'started' });

      return res as IStartEngineResponse;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to start engine');
    }
  }

  async stopEngine(id: number): Promise<StopEngineResponse> {
    try {
      const res = await api.patch(this.path, {}, { id: String(id), status: 'stopped' });

      return res as StopEngineResponse;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to stop engine');
    }
  }

  async driveMode(id: number): Promise<IDriveModeResponse> {
    try {
      const res = await api.patch(this.path, {}, { id: String(id), status: 'drive' });

      return res as IDriveModeResponse;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to switch to drive mode');
    }
  }
}

export default new EngineApi();
