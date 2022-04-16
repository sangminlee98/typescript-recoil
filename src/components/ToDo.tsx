import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Categories, IToDo, toDoState } from '../atoms/toDoState';

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

const DeleteButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;
  color: red;
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
    const name = e.currentTarget.name as any;
    setToDos(prev => prev.map(toDo => toDo.id === id ? {...toDo, category: name} : toDo));
  }
  const onDelete = () => {
    setToDos(prev => prev.filter(toDo => toDo.id !== id));
  }
  return (
    <li>
      <Text>{text}</Text>
      {category !== Categories.TO_DO && <Button name={Categories.TO_DO} onClick={onClick}>To Do</Button>}
      {category !== Categories.DOING && <Button name={Categories.DOING} onClick={onClick}>Doing</Button>}
      {category !== Categories.DONE && <Button name={Categories.DONE} onClick={onClick}>Done</Button>}
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </li>
  );
};

export default ToDo;