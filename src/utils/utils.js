// Function to handle edit individual todo item
export const editTodo = (todoList, todoItemToBeUpdate) => {
  todoList.map((todo) =>
    todo.id === todoItemToBeUpdate.id
      ? (todo.text = todoItemToBeUpdate.text)
      : todo
  );

  return todoList;
};
