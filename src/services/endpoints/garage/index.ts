import api from '../../api';

class GarageApi {
  async getCars() {
    try {
      const res = await api.get('garage');

      return res;
    } catch (err) {
      return Promise.resolve(err);
    }
  }
}

export default new GarageApi();
