import * as ActionTypes from "../Types";
import { 
  // getData, 
  getDataWithToken, 
  // postData 
} from "../services";


const onGetDietitian = (payload) => {
  return {
    type: ActionTypes.GET_DIETITIAN,
    payload
  }
} 

export const getDietitian = (url) => {
  return getDataWithToken(url, onGetDietitian); 
}