import React from 'react';
import { useForm } from 'react-hook-form';

interface IToDo {
  toDo: string;
}
const ToDoList = () => {
  const {
    register, handleSubmit, formState:{errors}, setValue
  } = useForm<IToDo>();
  const onSubmit = (data: IToDo) => {
    console.log('add to do', data.toDo);
    setValue('toDo', '');
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, () => console.log('error'))}>
        <input {...register('toDo', {required: 'please write To a Do'})} placeholder='Write a to do' />
        {errors.toDo?.message}
        <button>Add</button>
      </form>
    </div>
  );
};
export default ToDoList;
