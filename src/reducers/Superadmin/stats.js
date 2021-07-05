import * as ActionTypes from '../../actions/Types';
import { getStats } from "../initialState";

const statsReducer = (state = getStats, action) => {
  console.log(action);
  switch(action.type) {
    case ActionTypes.GET_STATS: 
    return {
      isSuccessful: true,
      data: action.payload
    }
    default: 
      return state;
  }
}

export default statsReducer;