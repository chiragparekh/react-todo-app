export default function TodoList({ todos, handleRemoveTodo }) {
  const remove = (todo) => {
    if (!window.confirm("Are you sure to delete?")) {
      return;
    }

    handleRemoveTodo(todo);
  };

  const list = todos.map((todo) => (
    <li className="flex justify-between py-2 px-2 text-sm" key={todo.id}>
      <span>{todo.name}</span>
      <div className="shrink-0">
        <button
          type="button"
          className="text-red-700 hover:text-red-900"
          onClick={() => remove(todo)}
        >
          Delete
        </button>
      </div>
    </li>
  ));

  return (
    <>
      <ul className="flex flex-col  divide-y">{list}</ul>
    </>
  );
}
