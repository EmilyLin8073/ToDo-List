import React from "react";
import ReactDOM from "react-dom";
import AppProvider from "../context/AppContext";
import TodoList from "../components/ToDoList/ToDoList.component";
import { shallow } from "enzyme";

describe("Todo List", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AppProvider>
        <TodoList />
      </AppProvider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <AppProvider>
        <TodoList />
      </AppProvider>,
      div
    );
  });
});
