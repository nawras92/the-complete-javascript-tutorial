//constants
const PROVIDE_VALUE = "PROVIDE_VALUE";

//action
export const provideValueAction = (payload) => {
  return { type: PROVIDE_VALUE, payload };
};
const initial = {
  value: "initial value",
};
const getValueReducer = (state = initial, action) => {
  if (action.type === PROVIDE_VALUE) {
    console.log(action);
    return {
      ...state,
      value: action.payload.updatedValue,
    };
  }

  return state;
};

export default getValueReducer;
