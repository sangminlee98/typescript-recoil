import { atom, selector } from 'recoil';

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export enum Categories {
  'TO_DO' = 'TO DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
})

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
  effects: [
    ({setSelf, onSet}) => {
      const storageKey = 'toDos';
      const savedValue = localStorage.getItem(storageKey);
      if(savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newToDo, _, isReset) => {
        isReset
        ? localStorage.removeItem(storageKey)
        : localStorage.setItem(storageKey, JSON.stringify(newToDo));
      })
    }
  ],
});

export const toDoSelector = selector({
  key: 'toDoSelcector',
  get: ({get}) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter(toDo => toDo.category === category);
  }
})
