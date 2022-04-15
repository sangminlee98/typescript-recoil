import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { IToDo, toDoState } from '../atoms/toDoState';

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

const ToDo = ({text, category, id}: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget:{name}} = e;
    switch(name) {
      case 'TO_DO':
        setToDos(prev => prev.map(toDo => toDo.id === id ? {...toDo, category: name} : toDo));
        break;
      case 'DOING':
        setToDos(prev => prev.map(toDo => toDo.id === id ? {...toDo, category: name} : toDo));
        break;
      case 'DONE':
        setToDos(prev => prev.map(toDo => toDo.id === id ? {...toDo, category: name} : toDo));
        break;
      default:
        throw new Error('this category is not exist');
    }
  }
  return (
    <li>
      <Text>{text}</Text>
      {category !== 'TO_DO' && <Button name='TO_DO' onClick={onClick}>To Do</Button>}
      {category !== 'DOING' && <Button name='DOING' onClick={onClick}>Doing</Button>}
      {category !== 'DONE' && <Button name='DONE' onClick={onClick}>Done</Button>}
    </li>
  );
};

export default ToDo;