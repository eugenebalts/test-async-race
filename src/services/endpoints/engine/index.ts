import api from '../../api';
import { EngineStopResponse, IEngineDriveResponse, IEngineStartResponse } from './types';
import { ERROR_MESSAGE } from '../../../constants';

class EngineApi {
  private readonly path: string = 'engine';

  async startEngine(id: number): Promise<IEngineStartResponse> {
    try {
      const { data } = await api.patch(this.path, {}, { id: String(id), status: 'started' });

      return data as IEngineStartResponse;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async stopEngine(id: number): Promise<EngineStopResponse> {
    try {
      const { data } = await api.patch(this.path, {}, { id: String(id), status: 'stopped' });

      return data as EngineStopResponse;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }

  async driveMode(id: number): Promise<IEngineDriveResponse> {
    try {
      const { data } = await api.patch(this.path, {}, { id: String(id), status: 'drive' });

      return data as IEngineDriveResponse;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : ERROR_MESSAGE);
    }
  }
}

export default new EngineApi();
