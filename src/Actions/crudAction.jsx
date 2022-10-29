import axios from "axios";
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

import jwtInterceptor from "./jwtInterceptor";

export const bookCreateRequest = (inputText) => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_CREATE_REQUEST,
      Accept: "application/json",
    });
    await axios.post(
      `https://crud-with-redux-dda11-default-rtdb.firebaseio.com/users.json`,
      inputText
    );
    dispatch({
      type: BOOK_CREATE_SUCCESS,
      payload: inputText,
    });
  } catch (error) {
    dispatch({
      type: BOOK_CREATE_FAIL,
      payload: error.response && error.response.data,
    });
  }
};

export const bookGetRequest = () => async (dispatch) => {
    try {
      dispatch({
        type: BOOK_GET_REQUEST,
        Accept: "application/json",
      });
      const {data}=await axios.get('https://crud-with-redux-dda11-default-rtdb.firebaseio.com/users.json');
      dispatch({
        type: BOOK_GET_SUCCESS,
        payload: data,
      });
    } catch (error) {
        dispatch({
          type: BOOK_GET_FAIL,
          payload: error.response && error.response.data,
        });
      }
  };
   

  export const bookUpdateRequest = (inputText,id) => async (dispatch) => {
    try {
      dispatch({
        type: BOOK_UPDATE_REQUEST,
        Accept: "application/json",
      });
  
      await axios.put(
        `https://crud-with-redux-dda11-default-rtdb.firebaseio.com/users/${id}.json`,inputText
          );
          // const {data}=await axios.get('https://crud-with-redux-dda11-default-rtdb.firebaseio.com/users.json');
          // dispatch({
          //   type: BOOK_GET_SUCCESS,
          //   payload: data,
          // });
          dispatch({
            type: BOOK_UPDATE_SUCCESS,
            payload: inputText,
          });
          console.log({inputText});

      
    } catch (error) {
      dispatch({
        type: BOOK_UPDATE_FAIL,
        payload: error.response && error.response.data,
      });
    }
  };

  export const bookDeleteRequest = (id) => async (dispatch) => {
    try {
      dispatch({
        type: BOOK_DELETE_REQUEST,
        Accept: "application/json",
      });
  
     const {data}= await axios.delete(
        `https://crud-with-redux-dda11-default-rtdb.firebaseio.com/users/${id}.json`
      );
      dispatch({
        type: BOOK_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_DELETE_FAIL,
        payload: error.response && error.response.data,
      });
    }
  };