import createDataContext from "./createDataContext";
// import imd from "../api/imd";
import imd from "../api/mockapi";

const UstadzReducer = (state, action) => {
  switch (action.type) {
    case "get_ustadz":
      return { ...state, ustadz: action.payload };

    default:
      return state;
  }
};

const getUstadz = (dispatch) => {
  return async (callback) => {
    const response = await imd.get("/ustadz");
    dispatch({ type: "get_ustadz", payload: response.data });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  UstadzReducer,
  {
    getUstadz,
  },
  { ustadz: [] }
);
