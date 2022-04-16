import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Categories, categoryState, toDoSelector } from '../atoms/toDoState';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
`;
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5em;
  color: ${props => props.theme.accentColor};
`;
const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5em;
  color: ${props => props.theme.accentColor};
`;
const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    const cat = e.currentTarget.value as any;
    setCategory(cat);
  }
  return (
    <Container>
      <Title>ToDo App</Title>
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo/>
      <hr />
      <SubTitle>{category}</SubTitle>
      {toDos.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
    </Container>
  );
};
export default ToDoList;
