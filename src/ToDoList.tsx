import React from 'react';
import { useForm } from 'react-hook-form';

// const ToDoList = () => {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     setToDo(e.currentTarget.value);
//     setToDoError("");
//   }
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if(toDo.length < 10) {
//       return setToDoError('To do should be longer')
//     }
//     console.log(toDo);
//     console.log('submit');
//     setToDo("");
//   }
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder='Write a to do' />
//         <button>Add</button>
//         {toDoError !== '' ? toDoError : null}
//       </form>
//     </div>
//   );
// };
// export default ToDoList;

const ToDoList = () => {
  const {register, watch} = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register('Email')} placeholder='Email' />
        <input {...register('First Name')} placeholder='First Name' />
        <input {...register('Last Name')} placeholder='Last Name' />
        <input {...register('Username')} placeholder='Username' />
        <input {...register('Password')} placeholder='Password' />
        <input {...register('Password1')} placeholder='Password1' />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;