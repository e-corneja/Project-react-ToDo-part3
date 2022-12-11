import iconDel from "../assets/icons/delete.png";
import StarSVG from "./StarSVG.jsx";

const Todo = ({ id, text, isFavorite, deleteTodo, favoriteTodo }) => {
  return (
    <div className={`todo ${isFavorite && "todo__favorite"}`}>
      <div className="todo__wrapper">
        <div onClick={() => favoriteTodo(id)} className="todo__star">
          <StarSVG id="svg" />
        </div>
        <div className="todo__text">{text}</div>
      </div>
      <button onClick={() => deleteTodo(id)} className="todo__delete">
        <img src={iconDel} alt="icon" />
      </button>
    </div>
  );
};

export default Todo;
