import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
    // if any todo is being edited, start with the current value
    // else if a new todo is being created, keep the input empty
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    // ref to focus on the form input
    const inputRef = useRef(null);

    // focus the input whenever the form re-renders
    useEffect(() => {
        inputRef.current.focus();
    });

    // runs when the submit button is pressed
    const handleSubmit = (e) => {
        e.preventDefault();

        // run the function addTodo with the id and text
        // isComplete tells the CSS whether the task has been
        // completed or not
        props.onSubmit({
            id: Date.now(),
            text: input,
            isComplete: false,
        });

        // clear the input field once the todo is added
        setInput("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const addForm = (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="Add a Todo"
                value={input}
                name="text"
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="todo-button">Add Todo</button>
        </form>
    );

    const editForm = (
        <form className="todo-form-edit" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input edit"
                placeholder="Update"
                value={input}
                name="text"
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="todo-button edit">Update</button>
        </form>
    );

    return props.edit ? editForm : addForm;
}

export default TodoForm;
