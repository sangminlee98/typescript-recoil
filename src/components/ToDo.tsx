import React from 'react';
import styled from 'styled-components';
import { IToDo } from '../atoms/toDoState';

const Text = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1em;
`;

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;
  color: ${props => props.theme.buttonColor};
  background-color: transparent;
  transition: all .2s ease-in;
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const ToDo = ({text}: IToDo) => {
  return (
    <li>
      <Text>{text}</Text>
      <Button>To Do</Button>
      <Button>Doing</Button>
      <Button>Done</Button>
    </li>
  );
};

export default ToDo;