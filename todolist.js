import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import useLocalState from "./hooks/useLocalState";

// parent component which displays the form for adding
// new todos as well as the list of saved todos.
// It also implements functions to add, remove and update todos
function TodoList() {
    // list of todos
    const [todos, setTodos] = useLocalState();

    // function to add a new todo
    const addTodo = (todo) => {
        // if the todo is empty or if it contains a lot of spaces
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        // append the new todo to the list of todos
        setTodos([todo, ...todos]);
    };

    // function to remove a todo from the todos list
    const removeTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    // function to update a todo given its id and the new value
    const updateTodo = (id, newTodo) => {
        // if the todo is empty or if it contains a lot of spaces
        if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
            return;
        }

        let updatedTodos = todos.map((todo) =>
            todo.id === id ? newTodo : todo
        );
        setTodos(updatedTodos);
    };

    // function to add a property isComplete to the todo object with the given id
    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>ToDo List</h1>

            {/* pass the addTodo() func as a prop to TodoForm */}
            <TodoForm onSubmit={addTodo} />

            {/* Display the list of saved todos */}
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
