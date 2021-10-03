export const deleteTodo = (todoList, todoItem) => {
  const index = todoList.indexOf(todoItem);

  todoList.splice(index, 1);

  const newTodoList = [...todoList];

  return newTodoList;
};
