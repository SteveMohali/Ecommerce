import { ACTION_TYPES } from "constant";
const intial_value = {
  categories: [],
  loader: false,
};

export default categories = (state = intial_value, action) => {
  switch (action.type) {
    case ACTION_TYPES.CATEGORY_REQUEST:
      return { ...state, loader: false };
    case ACTION_TYPES.CATEGORY_SUCCESS:
      return { ...state, loader: true };
    case ACTION_TYPES.CATEGORY_COMPLETE:
      return { ...state, categories: action.payload, loader: true };
    case ACTION_TYPES.CATEGORY_FAILED:
      return { ...state, loader: false };
    default:
      return state;
  }
};
