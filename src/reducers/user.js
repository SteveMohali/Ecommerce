import { ACTION_TYPES } from "../constant";
const INITIAL_STATE = {
  user: {},
  isLoggedIn: false,
  loader: false,
  fcm: null,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.AUTH_REQUEST:
      return { ...state, loader: true };
    case ACTION_TYPES.AUTH_COMPLETE:
      return {
        ...state,
        loader: false,
        isLoggedIn: true,
        user: action.payload,
      };
    case ACTION_TYPES.AUTH_FAILED:
      return { ...state, loader: false, isLoggedIn: false, user: {} };
    case ACTION_TYPES.SIGNUP:
      return { ...state, loader: false };
    case ACTION_TYPES.RESET:
      return INITIAL_STATE;
    case ACTION_TYPES.LOG_OUT:
      return INITIAL_STATE;
    case ACTION_TYPES.DEVICE_TOKEN:
      return { ...state, fcm: action.payload };
    default:
      return state;
  }
}
