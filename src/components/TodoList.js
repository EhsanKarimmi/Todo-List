import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        } else {
            const newTodo = [todo, ...todos];
            setTodos(newTodo);
        }
    };

    const removeTodo = (id) => {
        const removeTodo = [...todos].filter((todo) => {
            return todo.id !== id;
        });
        setTodos(removeTodo);
    };

    const updateTodo = (todoId, newText) => {
        if (!newText.text || /^\s*$/.test(newText.text)) {
            return;
        } else {
            setTodos((prev) =>
                prev.map((item) => {
                    return item.id === todoId ? newText : item;
                })
            );
        }
    };

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
        <>
            <h1>MY PLANS</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </>
    );
}

export default TodoList;
