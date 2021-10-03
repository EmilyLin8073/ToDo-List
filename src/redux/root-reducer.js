import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { TodoListReducer } from "./TodoList/TodoList.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["toDoItem"]
};

export default combineReducers({
  // const rootReducer = combineReducers({
  toDoList: TodoListReducer
});

// export default persistReducer(persistConfig, rootReducer);
