import {
  BOOK_CREATE_REQUEST,
  BOOK_CREATE_SUCCESS,
  BOOK_CREATE_FAIL,
  BOOK_GET_REQUEST,
  BOOK_GET_SUCCESS,
  BOOK_GET_FAIL,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_SUCCESS,
  BOOK_UPDATE_FAIL,
  BOOK_DELETE_REQUEST,
  BOOK_DELETE_SUCCESS,
  BOOK_DELETE_FAIL,
} from "../Constants/crudConstant";

export const bookCreateReducers = (state = {}, action) => {
  switch (action.type) {
    case BOOK_CREATE_REQUEST:
      return { loading: true };
    case BOOK_CREATE_SUCCESS:
      return { loading: false, Create: action.payload };
    case BOOK_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bookGetReducers = (state = {}, action) => {
  switch (action.type) {
    case BOOK_GET_REQUEST:
      return { loading: true };
    case BOOK_GET_SUCCESS:
      return { loading: false, books: action.payload };
    case BOOK_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bookUpdateReducers = (state = {}, action) => {
  switch (action.type) {
    case BOOK_UPDATE_REQUEST:
      return { loading: true };
    case BOOK_UPDATE_SUCCESS:
      return { loading: false, updatedBook: action.payload };
    case BOOK_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bookDeleteReducers = (state = {}, action) => {
  switch (action.type) {
    case BOOK_DELETE_REQUEST:
      return { loading: true };
    case BOOK_DELETE_SUCCESS:
      return { loading: false, Delete: action.payload };
    case BOOK_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
