import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

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

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30vw;
`;
const AlertError = styled.span`
  color: red;
  font-size: 5px;
  font-weight: bold;
`;
const InputInform = styled.input`
  margin: 10px 0;
`;
interface IForm {
  Email: string;
  FirstName: string;
  LastName: string;
  Username: string;
  Password: string;
  PasswordCheck: string;
  extraErrors?: string;
}
const HookForm = () => {
  const {register, handleSubmit, formState:{errors}, setError}  = useForm<IForm>({defaultValues: {Email: '@naver.com'}});
  const onValid = (data: IForm) => {
    if(data.Password !== data.PasswordCheck) {
      setError('PasswordCheck', {message: 'Password is not same'}, {shouldFocus: true});
      
    }
    // setError('extraErrors', {message: 'Server offline'});
  }
  console.log(errors);
  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid, () => console.log('Invalid'))} autoComplete="off">
        <InputInform
          {...register('Email', {required: 'Email is required', pattern: {value: /^[A-Za-z0-9._%+-]+@naver.com$/gm, message: 'Only naver.com emails allowed' }})} 
          placeholder='Email' />
        <AlertError>
          {errors.Email?.message}
        </AlertError>
        <InputInform
          {...register(
            'FirstName', 
            {required: 'First Name is required', 
            validate: {
              noNico : value => !value.includes('nico') || 'you can\'t use keyword nico',
              noNick : value => !value.includes('nick') || 'you can\'t use keyword nick'
            }})
          }  
          placeholder='First Name' />
        <AlertError>
          {errors.FirstName?.message}
        </AlertError>
        <InputInform {...register('LastName', {required: 'Last Name is required'})} 
          placeholder='Last Name' />
        <AlertError>
          {errors.LastName?.message}
        </AlertError>
        <InputInform {...register('Username', {required: 'Username is required', minLength: {value: 5, message: 'It has to over 5 words'}})}
          placeholder='Username' />
        <AlertError> 
          {errors.Username?.message}
        </AlertError>
        <InputInform type='password' {...register('Password', {required: "Password is required", minLength: {value: 5, message: 'It has to over 5 words'}})} 
          placeholder='Password' />
        <AlertError>
          {errors.Password?.message}
        </AlertError>
        <InputInform type='password' {...register('PasswordCheck', {required: 'Check is required'})} 
          placeholder='Password Check' />
        <AlertError>
          {errors.PasswordCheck?.message}
        </AlertError>
        <button style={{marginTop: '10px'}}>Add</button>
        <AlertError>
          {errors.extraErrors?.message}
        </AlertError>
      </Form>
    </Container>
  );
};

export default HookForm;