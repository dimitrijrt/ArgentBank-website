export const SET_TOKEN = "SET_TOKEN";

export const SET_USER = "SET_USER";
export const REMOVE_TOKEN ="REMOVE_TOKEN";

export const setToken = (token) => (dispatch) => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  })
}

export const setUser = (user) => (dispatch) => {
  dispatch({
    type: SET_USER, // how to modify
    payload: user // what data
  })
}

export const removeToken = () => (dispatch) => {
    dispatch({
        type: REMOVE_TOKEN,
    });
};