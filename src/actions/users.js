import { ACTION_TYPES } from "../constant";

export const signup = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ACTION_TYPES.AUTH_REQUEST });

    dispatch({ type: ACTION_TYPES.AUTH_SUCESS });
  } catch (error) {
    console.log(error);
    dispatch({ type: ACTION_TYPES.AUTH_FAILED });
  }
};
