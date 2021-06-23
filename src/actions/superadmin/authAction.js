import * as ActionTypes from "../Types";
import { postData } from "../services";

const onRegisterCompany = (payload) => {
  console.log(payload.code);
  if(payload.code) {
    return {
      type: ActionTypes.REGISTER_COMPANY_FAIL,
      payload: payload
    }
  } else {
    return {
      type: ActionTypes.REGISTER_COMPANY_SUCCESS,
      payload: payload
    }
  }
};

export const registerCompany = (url, payload) => {
  return postData(url, payload, onRegisterCompany);
};

