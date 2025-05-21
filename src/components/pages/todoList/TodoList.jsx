import { Footer } from "../todoList/Footer.jsx";
import { Header } from "../todoList/Header.jsx";
import { Todos } from "../todoList/Todos.jsx";
import { useTodos } from "../../../../../Mayorista-Api/src/hooks/todoListHooks/useTodos.js";
import { useNavigate } from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton';
import "./TodoList.css";

const TodoList = () => {
  const {
    activeCount,
    completedCount,
    filterSelected,
    handleRemoveAllCompleted,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleAddTodo,
    handleUpdateTitle,
    todos: filteredTodos,
  } = useTodos();

  const navigate = useNavigate();

  return (
    <>
         <div className="contact-close">
        <CloseButton
          aria-label="Cerrar formulario"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="all-todolist">
     
        <div className="container-todolist">
          <div className="todoapp">
            <Header saveTodo={handleAddTodo} />
            <Todos
              removeTodo={handleRemove}
              setCompleted={handleCompleted}
              setTitle={handleUpdateTitle}
              todos={filteredTodos}
            />
            <Footer
              handleFilterChange={handleFilterChange}
              completedCount={completedCount}
              activeCount={activeCount}
              filterSelected={filterSelected}
              onClearCompleted={handleRemoveAllCompleted}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
