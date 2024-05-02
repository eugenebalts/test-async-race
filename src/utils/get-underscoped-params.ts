import { QueryParams } from '../services/api/types';

const getUnderscopedParams = (params: Record<string, string | number>): QueryParams =>
  Object.entries(params).reduce((queryParams, [key, value]) => {
    queryParams[`_${key}`] = String(value);

    return queryParams;
  }, {} as QueryParams);

export default getUnderscopedParams;
