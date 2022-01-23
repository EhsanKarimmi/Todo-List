import React, { useState, useEffect, useRef } from "react";

function TodoForm({ onSubmit, edit }) {
    const [input, setInput] = useState(edit ? edit.value : "");
    const inputRef = useRef(null);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });
        setInput("");
    };

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <form className="todoForm" onSubmit={handleSubmit}>
                {edit ? (
                    <>
                        <input
                            type="text"
                            name="text"
                            className="todoInput edit"
                            placeholder="Update Todo..."
                            value={input}
                            onChange={handleChange}
                            ref={inputRef}
                            autoComplete="off"
                        />
                        <button className="todoButton edit">Update</button>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            name="text"
                            className="todoInput"
                            placeholder="Add New Todo..."
                            value={input}
                            onChange={handleChange}
                            ref={inputRef}
                            autoComplete="off"
                        />
                        <button className="todoButton">Add Todo</button>
                    </>
                )}
            </form>
        </>
    );
}

export default TodoForm;
