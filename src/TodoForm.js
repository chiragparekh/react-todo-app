export default function TodoForm({ todo, setTodo, handleAddTodo }) {
  const handleKeyup = (e) => {
    if (e.key == "Enter") {
      handleAddTodo();
    }
  };
  return (
    <div className="TodoForm">
      <input
        type="text"
        className="border border-gray-400 w-full rounded-md px-4 py-2"
        placeholder="Create Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyUp={handleKeyup}
      />
    </div>
  );
}
