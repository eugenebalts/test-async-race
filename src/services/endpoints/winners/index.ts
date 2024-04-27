import api from '../../api';

class WinnersApi {
  private readonly path: string = 'winners';

  async getWinners() {
    try {
      const res = await api.get(this.path);

      return res;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to get winners');
    }
  }
}

export default new WinnersApi();
