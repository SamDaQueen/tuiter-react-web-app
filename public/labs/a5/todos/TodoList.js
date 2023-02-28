import TodoItem from "./TodoItem.js";
import todos from "./todos.js";

const TodoList = () => {
  return `
    <ul>
        ${todos.map((todo) => TodoItem(todo)).join("")}
    </ul>
`;
};
export default TodoList;
