import Todo from "./Todo.jsx";

const Todos = ({ todos, deleteTodo, favoriteTodo }) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <Todo
            id={todo.id}
            favoriteTodo={favoriteTodo}
            deleteTodo={deleteTodo}
            key={todo.id}
            text={todo.text}
            isFavorite={todo.isFavorite}
          />
        );
      })}
    </div>
  );
};

export default Todos;
