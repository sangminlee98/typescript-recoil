import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { toDoSelector } from '../atoms/toDoState';
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
  const {toDo, doing, done} = useRecoilValue(toDoSelector);
  return (
    <Container>
      <Title>ToDo App</Title>
      <CreateToDo/>
      <hr />
      <SubTitle>To Do</SubTitle>
      <ul>
        {toDo.map((todo) => (<ToDo key={todo.id} {...todo}/>))}
      </ul>
      <hr />
      <SubTitle>Doing</SubTitle>
      <ul>
        {doing.map((todo) => (<ToDo key={todo.id} {...todo}/>))}
      </ul>
      <hr />
      <SubTitle>Done</SubTitle>
      <ul>
        {done.map((todo) => (<ToDo key={todo.id} {...todo}/>))}
      </ul>
    </Container>
  );
};
export default ToDoList;
