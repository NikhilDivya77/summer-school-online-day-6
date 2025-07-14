function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className="flex justify-between items-center bg-white shadow p-2 rounded mb-2 w-full max-w-md">
      <span
        className={\`cursor-pointer \${todo.completed ? "line-through text-gray-400" : ""}\`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
