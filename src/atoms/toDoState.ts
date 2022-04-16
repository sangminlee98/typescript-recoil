import { atom, selector } from 'recoil';

export interface IToDo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE';
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelcector',
  get: ({get}) => {
    const toDos = get(toDoState);
    return {
      toDo: toDos.filter(toDo => toDo.category === 'TO_DO'),
      doing:  toDos.filter(toDo => toDo.category === 'DOING'),
      done: toDos.filter(toDo => toDo.category === 'DONE')
    };
  }
})
