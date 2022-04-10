import React, { useState } from 'react';

const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setToDo(e.currentTarget.value);
    setToDoError("");
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(toDo.length < 10) {
      return setToDoError('To do should be longer')
    }
    console.log(toDo);
    console.log('submit');
    setToDo("");
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder='Write a to do' />
        <button>Add</button>
        {toDoError !== '' ? toDoError : null}
      </form>
    </div>
  );
};

export default ToDoList;