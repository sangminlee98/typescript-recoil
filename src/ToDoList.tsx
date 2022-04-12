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
  const {register, handleSubmit, formState} = useForm();
  const onValid = (data: any) => {
    console.log(data);
  }
  console.log(formState.errors);
  return (
    <div>
      <form style={{display: 'flex' ,flexDirection: 'column'}} onSubmit={handleSubmit(onValid, () => console.log('Invalid'))}>
        <input {...register('Email', {required: true})} placeholder='Email' />
        <input {...register('First Name', {required: true})} placeholder='First Name' />
        <input {...register('Last Name', {required: true})} placeholder='Last Name' />
        <input {...register('Username', {required: true, minLength: 10})} placeholder='Username' />
        <input {...register('Password', {required: true, minLength: 5})} placeholder='Password' />
        <input {...register('Password1', {required: "Passworid is Required", minLength: {value: 5, message: 'Your password is too short'}})} placeholder='Password1' />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;