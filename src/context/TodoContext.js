import createDataContext from "./createDataContext";
import imd from "../api/imd";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "get_todos":
      return { ...state, todos: action.payload };
    // case "add_todo":
    //   return { ...state, todo: action.payload };
    // case "edit_todo":
    //   return { ...state, todo: action.payload };
    // case "delete_todo":
    //   return { ...state, todo: action.payload };
    default:
      return state;
  }
};

const getTodos = (dispatch) => {
  return async (callback) => {
    console.log("get");
    const response = await imd.get("/get.php");
    dispatch({ type: "get_todos", payload: response.data.info });
    if (callback) callback();
  };
};

const addTodo = (dispatch) => {
  return async (task, callback) => {
    const data = {
      task,
    };
    const response = await imd.post("/add.php", data);
  };
};

const deleteTodo = (dispatch) => {
  return async (id, callback) => {
    const data = {
      id,
    };
    const response = await imd.post("/delete.php", data);
    console.log("delete");
    if (callback) callback();
  };
};

const updateTodo = (dispatch) => {
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
  TodoReducer,
  {
    getTodos,
    addTodo,
    deleteTodo,
    updateTodo,
    // searchBerita,
    // setSelectedCategory,
    // setBeritaProfile,
  },
  { todos: [] }
);
