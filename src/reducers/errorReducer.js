import { GET_ERRORS, NO_ERRORS } from "../actions/Types";
import { errors } from "./initialState";

export default function(state = errors, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        isError: true,
        data: action.payload,
      };
    case NO_ERRORS:
      return {
        isError: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
