import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialState = {
  email: "",
  countryCode: "",
  phoneNumber: "",
};

export const actionTypes = {
  SET_EMAIL: "SET_EMAIL",
  SET_COUNTRY_CODE: "SET_COUNTRY_CODE",
  SET_PHONE_NUMBER: "SET_PHONE_NUMBER",
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EMAIL:
      return Object.assign({}, state, {
        email: action.email,
      });
    case actionTypes.SET_COUNTRY_CODE:
      return Object.assign({}, state, {
        countryCode: action.countryCode,
      });
    case actionTypes.SET_PHONE_NUMBER:
      return Object.assign({}, state, {
        phoneNumber: action.phoneNumber,
      });
    default: return state;
  }
};

// ACTIONS
export const setEmail = email => dispatch => dispatch({ type: actionTypes.SET_EMAIL, email });
export const setCountryCode = countryCode => dispatch => dispatch({ type: actionTypes.SET_COUNTRY_CODE, countryCode });
export const setPhoneNumber = phoneNumber => dispatch => dispatch({ type: actionTypes.SET_PHONE_NUMBER, phoneNumber });

export function initializeStore(state = initialState) {
  return createStore(reducer, state, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
