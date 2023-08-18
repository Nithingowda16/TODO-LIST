import React, { useState } from "react";
import TodoForm from "./TodoForm";

// import icons
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

// component for displaying the list of saved todos
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });

    // submit handler when the edit form is submitted
    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({ id: null, value: "" });
    };

    return todos.map((todo, index) =>
        // if the edit button is clicked for any todo, render the edit form for it
        // and render the remaining todos as they are
        edit.id === todo.id ? (
            <TodoForm edit={edit} onSubmit={submitUpdate} />
        ) : (
            <div
                className={todo.isComplete ? "todo-row complete" : "todo-row"}
                key={index}
            >
                {/* Display the todo */}
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>

                {/* Display the icons */}
                <div className="icons">
                    {/* Delete icon */}
                    <RiCloseCircleLine
                        className="delete-icon"
                        onClick={() => removeTodo(todo.id)}
                    />

                    {/* Edit icon */}
                    <TiEdit
                        className="delete-icon"
                        // when the edit button is clicked, set the edit state
                        onClick={() =>
                            setEdit({ id: todo.id, value: todo.text })
                        }
                    />
                </div>
            </div>
        )
    );
}

export default Todo;
