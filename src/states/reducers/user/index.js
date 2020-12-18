import { LOGIN_SUCCESS } from "../../actions/user/types";

const myState = {
  userInfor: [],
};

const reducer = (state = myState, { payload, type }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfor: payload,
      };
    default:
      return state;
  }
};
export default reducer;
