import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { toDoState } from '../atoms/toDoState';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
`;
const Title = styled.h1`
  font-size: large;
  margin-bottom: 0.5em;
  color: ${props => props.theme.accentColor};
`;
const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);
  return (
    <Container>
      <Title>To Dos</Title>
      <CreateToDo/>
      <hr />
      <ul>
        {toDos.map((todo) => (<ToDo key={todo.id} {...todo}/>))}
      </ul>
    </Container>
  );
};
export default ToDoList;
