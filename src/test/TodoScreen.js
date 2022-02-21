import React, { useContext, useState, useEffect } from "react";
//import react native
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
//import material community icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//import search-bar from react-native-elements
import SearchBar from "../components/SearchBar";
//import context
import { Context } from "../context/TodoContext";

const TodoScreen = () => {
  //use context
  const { state, getTodos, addTodo, deleteTodo, updateTodo } =
    useContext(Context);
  //create state
  const [isEdit, setIsEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(null);
  const [todo, setTodo] = useState("");
  //create state
  const [todosFilter, setTodosFilter] = useState([]);

  //use effect
  useEffect(() => {
    getTodos();
  }, []);

  //create function
  const handleAdd = () => {
    if (isEdit) {
      const data = {
        id: idEdit,
        task: todo,
      };
      updateTodo(data, () => {});
    } else {
      addTodo(todo, () => {});
    }
    getTodos(() => {});

    setIsEdit(false);
    setTodo("");
  };

  const handleEdit = (td) => {
    setTodo(td.task);
    setIsEdit(true);
    setIdEdit(td.id);
  };

  const handleDelete = (id) => {
    deleteTodo(id, () => {
      getTodos(() => {});
    });
  };

  const handleCancel = () => {
    setTodo("");
    setIsEdit(false);
  };

  const handleSearch = (text) => {
    // const todosFilter = todos.filter((todo) => {
    //   const textFilter = todo.todo.toLowerCase().includes(text.toLowerCase());
    //   return textFilter;
    // });
    // setTodosFilter(todosFilter);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={(text) => handleSearch(text)}
          />
        </View> */}
        <View style={styles.content}>
          <View style={styles.content_header}>
            <Text style={styles.content_header_title}>List Todo</Text>
          </View>
          <View style={styles.content_footer}>
            <View style={styles.content_footer_item}>
              <TextInput
                style={styles.input}
                placeholder="Add Todo"
                onChangeText={(text) => setTodo(text)}
                value={todo}
                //   onFocus={() => {
                //     props.setClicked(true);
                //   }}
              />
              <TouchableOpacity
                onPress={() => handleCancel()}
                style={styles.content_footer_item_cancel}
              >
                <MaterialCommunityIcons name="cancel" color="#fff" size={24} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleAdd()}
                style={styles.content_footer_item_add}
              >
                <MaterialCommunityIcons name="plus" color="#fff" size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.content_body}>
            <View style={styles.content_body_todo}>
              {state.todos
                .sort((a, b) => a.id - b.id)
                .map((todo) => (
                  <View key={todo.id} style={styles.content_body_todo_item}>
                    <Text style={styles.content_body_todo_item_text}>
                      {todo.task}
                    </Text>
                    <TouchableOpacity
                      onPress={() => handleEdit(todo)}
                      style={styles.content_body_todo_item_edit}
                    >
                      <MaterialCommunityIcons
                        name="pencil-outline"
                        color="#1F569D"
                        size={24}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => handleDelete(todo.id)}
                      style={styles.content_body_todo_item_delete}
                    >
                      <MaterialCommunityIcons
                        name="delete-outline"
                        color="#1F569D"
                        size={24}
                      />
                    </TouchableOpacity>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#1F569D",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    backgroundColor: "#fff",
  },
  content_header: {
    width: "100%",
    height: 50,
    backgroundColor: "#1F569D",
    justifyContent: "center",
    alignItems: "center",
  },
  content_header_title: {
    fontSize: 20,
    color: "#fff",
  },
  content_body: {
    width: "100%",
    backgroundColor: "#fff",
  },
  content_body_todo: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  content_body_todo_item: {
    width: "100%",
    height: 70,
    backgroundColor: "#fff",
    borderBottomColor: "#1F569D",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  content_body_todo_item_edit: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  content_body_todo_item_delete: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  content_body_todo_item_text: {
    fontSize: 18,
  },

  content_footer: {
    width: "100%",
    height: 50,
    backgroundColor: "#1F569D",
    justifyContent: "center",
    alignItems: "center",
  },
  content_footer_item: {
    width: "100%",
    height: 50,

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    backgroundColor: "#fff",
    width: "70%",
  },
  content_footer_item_cancel: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  content_footer_item_add: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TodoScreen;
