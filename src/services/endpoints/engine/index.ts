import api from '../../api';
import { EngineStopResponse, IEngineDriveResponse, IEngineStartResponse } from './types';

class EngineApi {
  private readonly path: string = 'engine';

  async startEngine(id: number): Promise<IEngineStartResponse> {
    try {
      const res = await api.patch(this.path, {}, { id: String(id), status: 'started' });

      return res as IEngineStartResponse;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to start engine');
    }
  }

  async stopEngine(id: number): Promise<EngineStopResponse> {
    try {
      const res = await api.patch(this.path, {}, { id: String(id), status: 'stopped' });

      return res as EngineStopResponse;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to stop engine');
    }
  }

  async driveMode(id: number): Promise<IEngineDriveResponse> {
    try {
      const res = await api.patch(this.path, {}, { id: String(id), status: 'drive' });

      return res as IEngineDriveResponse;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to switch to drive mode');
    }
  }
}

export default new EngineApi();
