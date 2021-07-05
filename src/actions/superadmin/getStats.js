import * as ActionTypes from '../Types';
import { getDataWithToken } from "../services";

const onGetSuperAdminStats = (payload) => {
  return {
    type: ActionTypes.GET_STATS,
    payload
  }
}

export const getSuperAdminStats = (url) => {
  return getDataWithToken(url, onGetSuperAdminStats);
}