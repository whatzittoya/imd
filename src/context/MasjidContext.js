import createDataContext from "./createDataContext";
// import imd from "../api/imd";
import imd from "../api/imd";

const MasjidReducer = (state, action) => {
  switch (action.type) {
    case "get_masjid":
      return { ...state, masjid: action.payload };

    default:
      return state;
  }
};

const getMasjid = (dispatch) => {
  return async (callback) => {
    const response = await imd.get("/masjid");
    dispatch({ type: "get_masjid", payload: response.data });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  MasjidReducer,
  {
    getMasjid,
  },
  { masjid: [] }
);
