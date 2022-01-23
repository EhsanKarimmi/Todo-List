import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: "",
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => {
        return (
            <div
                className={todo.isComplete ? "todoRow complete" : "todoRow"}
                key={index}
            >
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <AiOutlineCloseCircle
                        onClick={() => {
                            removeTodo(todo.id);
                        }}
                        className="deleteIcon"
                    />
                    <AiOutlineEdit
                        onClick={() => {
                            setEdit({ id: todo.id, value: todo.text });
                        }}
                        className="editIcon"
                    />
                </div>
            </div>
        );
    });
}

export default Todo;
