const AddTodo = ({ text, handleTextChange, addTodo, handleKeyDownInput }) => {
  return (
    <div className="add-todo">
      <input
        type="text"
        className="add-todo__input"
        placeholder="Фуфелшмерц, тебя ждут дела"
        value={text}
        onChange={(e) => handleTextChange(e)}
        onKeyDown={(e) => handleKeyDownInput(e)}
      />
      <button type="submit" className="add-todo__btn" onClick={addTodo}>
        Добавить
      </button>
    </div>
  );
};

export default AddTodo;
