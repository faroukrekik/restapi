import { GET_USERS } from "./actionTypes";

const init = {
  loading: true,
  users: null,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload, loading: false };

    default:
      return state;
  }
};

export default reducer;
