import React from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { categoryState, toDoState } from '../atoms/toDoState';

const ErrorMessage = styled.span`
  margin-left: 1em;
  font-size: 0.8rem;
  color: ${props => props.theme.accentColor};
`;

interface IForm {
  toDo: string;
};

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const {register, handleSubmit, formState:{errors}, setValue} = useForm<IForm>();
  const handleValid = ({toDo}: IForm) => {
    setToDos(prev => [...prev, {text: toDo, id: Date.now(), category}]);
    setValue('toDo', '');
  }
  return (
    <form onSubmit={handleSubmit(handleValid, () => console.log('error'))} autoComplete='off'>
      <input {...register('toDo', {required: 'please write a To Do'})} placeholder='Write a to do' />
      <button>Add</button>
      <ErrorMessage>{errors.toDo?.message}</ErrorMessage>
    </form>
  );
};

export default CreateToDo;