import React, { useState } from 'react';

const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setToDo(e.currentTarget.value);
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(toDo);
    setToDo("");
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder='Write a to do' />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;