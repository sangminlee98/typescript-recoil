import React from 'react';
import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';
import styled from 'styled-components';

const ErrorMessage = styled.span`
  margin-left: 1em;
  font-size: 0.8rem;
  color: red;
`;

const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
})

interface IToDo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE';
}
interface IForm {
  toDo: string;
}
const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const {register, handleSubmit, formState:{errors}, setValue} = useForm<IForm>();
  const handleValid = ({toDo}: IForm) => {
    setToDos(prev => [...prev, {text: toDo,id: Date.now(), category: 'TO_DO'}]);
    setValue('toDo', '');
  }
  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={handleSubmit(handleValid, () => console.log('error'))} autoComplete='off'>
        <input {...register('toDo', {required: 'please write a To Do'})} placeholder='Write a to do' />
        <button>Add</button>
        <ErrorMessage>{errors.toDo?.message}</ErrorMessage>
      </form>
      <ul>
        {toDos.map((todo) => (<li key={todo.id}>{todo.text}</li>))}
      </ul>
    </div>
  );
};
export default ToDoList;
