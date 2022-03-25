import { ACTION_TYPES } from "../constant";
const INITIAL_STATE = {
  courses: [],
  loader: false,
};

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.COURSE_REQUEST:
      return { ...state, loader: true };
    case ACTION_TYPES.COURSE_COMPLETE:
      return {
        ...state,
        loader: false,
        courses: action.payload,
      };
    case ACTION_TYPES.COURSE_SUCCESS:
      return { ...state, loader: false };
    case ACTION_TYPES.COURSE_FAILED:
      return { ...state, loader: false };
    default:
      return state;
  }
}
