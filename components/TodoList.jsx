import TodoItem from "./TodoItem";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul className="w-full flex flex-col items-center">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
