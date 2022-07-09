import customAPI from "../api";
import { ActionTypes } from "./indexitem";

// data cars
export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const response = await customAPI.get("/cars");
      console.log(response);
      dispatch({
        type: ActionTypes.FETCH_ITEMS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// data cars:id
export const fetchItem = (id) => {
  return async (dispatch) => {
    try {
      const response = await customAPI.get(`/cars/${id}`);
      console.log(response);
      dispatch({
        type: ActionTypes.SELECTED_ITEM,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// set button
export const setButton = (button) => {
  return {
    type: ActionTypes.SET_BUTTON,
    payload: button,
  };
};
