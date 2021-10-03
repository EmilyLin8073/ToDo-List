import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { ToDoListReducer } from "./ToDoList/ToDoList.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["toDoList"]
};

const rootReducer = combineReducers({
  toDoList: ToDoListReducer
});

export default persistReducer(persistConfig, rootReducer);
