import createDataContext from "./createDataContext";
// import imd from "../api/imd";
import imd from "../api/mockapi";

const KajianReducer = (state, action) => {
  switch (action.type) {
    case "get_Kajian":
      return { ...state, kajian: action.payload };
    // case "add_Kajian":
    //   return { ...state, Kajian: action.payload };
    // case "edit_Kajian":
    //   return { ...state, Kajian: action.payload };
    // case "delete_Kajian":
    //   return { ...state, Kajian: action.payload };
    default:
      return state;
  }
};

const getKajian = (dispatch) => {
  return async (callback) => {
    const response = await imd.get("/kajian");
    dispatch({ type: "get_Kajian", payload: response.data });
    if (callback) callback();
  };
};

const addKajian = (dispatch) => {
  return async (task, callback) => {
    const data = {
      task,
    };
    const response = await imd.post("/add.php", data);
  };
};

const deleteKajian = (dispatch) => {
  return async (id, callback) => {
    const data = {
      id,
    };
    const response = await imd.post("/delete.php", data);
    console.log("delete");
    if (callback) callback();
  };
};

const updateKajian = (dispatch) => {
  return async (data, callback) => {
    const response = await imd.post("/update.php", data);
    console.log("update");
    if (callback) callback();
  };
};
// const setBeritaProfile = (dispatch) => {
//   return (id, callback) => {
//     dispatch({ type: "set_berita_profile", payload: id });
//     if (callback) callback();
//   };
// };
// const searchBerita = (dispatch) => {
//   return async (searchTerm, callback) => {
//     const response = await imd.get("/berita/search", {
//       params: {
//         search: searchTerm,
//       },
//     });
//     dispatch({ type: "get_berita", payload: response.data });
//     if (callback) callback();
//   };
// };

// const setSelectedCategory = (dispatch) => {
//   return (data) => {
//     dispatch({
//       type: "set_category",
//       payload: { name: data.name, value: data.value },
//     });
//   };
// };

export const { Context, Provider } = createDataContext(
  KajianReducer,
  {
    getKajian,
    addKajian,
    deleteKajian,
    updateKajian,
    // searchBerita,
    // setSelectedCategory,
    // setBeritaProfile,
  },
  { kajian: [] }
);
