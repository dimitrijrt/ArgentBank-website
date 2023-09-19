
const initialState = {
  user: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
    case "REMOVE_TOKEN":
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};





