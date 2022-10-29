import {
  bookCreateReducers,
  bookGetReducers,
  bookUpdateReducers,
  bookDeleteReducers,
} from "../Reducers/crudReducer";
import { combineReducers } from "redux";
export const rootReducer = combineReducers({
  bookCreateRequest: bookCreateReducers,
  bookGetRequest: bookGetReducers,
  bookUpdateRequest: bookUpdateReducers,
  bookDeleteRequest: bookDeleteReducers,
});
