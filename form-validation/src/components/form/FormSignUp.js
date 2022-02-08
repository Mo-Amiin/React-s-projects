import React from 'react';
import useForm from './useForm';
import validation from './validation';
function FormSignUp({submitForm}) {
    const {handleChange,values,handleSubmit,errors} = useForm(validation,submitForm);

  return <div className='form-sign-up'>
      <form className='form-content' onSubmit={handleSubmit}>
          <h1>Create your account by filling out of information below</h1>

          <div className='form-input'>
              <label htmlFor='userName' className='form-label'>userName</label>
              <input 
              type='text'
              placeholder='Enter your Username'
              className='form-input'
              name='userName'
              value={values.userName}
              onChange={handleChange}   
               />
                  {errors.userName && <p className='text-red-400'>{errors.userName}</p>}
            </div>
            <div className='form-input'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input 
              type='email'
              placeholder='Enter your email'
              className='form-input'
              name='email'
              value={values.email}
              onChange={handleChange}   
               />
              {errors.email && <p className='text-red-400'>{errors.email}</p>}

            </div>
            <div className='form-input'>
              <label htmlFor='password' className='form-label'>password</label>
              <input 
              type='password'
              placeholder='Enter your password'
              className='form-input'
              name='password'
              value={values.password}
              onChange={handleChange}  
               
               />
              {errors.password && <p className='text-red-400'>{errors.password}</p>}

            </div>
            <div className='form-input'>
              <label htmlFor='confirmPassword' className='form-label'>confirmPassword</label>
              <input 
              type='text'
              placeholder='Enter your confirmPassword'
              className='form-input'
              name='confirmPassword'
              value={values.confirmPassword}
              onChange={handleChange}   
               />
             {errors.confirmPassword && <p className='text-red-400'>{errors.confirmPassword}</p>}

            </div>
            <button className='form-btn' type='submit'>Sign Up</button>
            <span>Al ready hava an acount <a href='#'>Sign In</a></span>
            

             
         
          
      </form>
  </div>;
}

// const FormInput =({type,label,value,onChange})=>{
//               return (
//               <div className='form-input'>
//               <label htmlFor='userName' className='form-label'>{label}</label>
//               <input 
//               type={type}
//               placeholder={`Enter your ${label}`}
//               className='form-input'
//               name={label}
//               value={value}
//               onChange={onChange}   
//                />

               
//                </div>)
// }

// const SubmitButton =({label,label2,type})=>{
//     return (<>
//     <button className='form-btn' type={type}>{label}</button>
//     <span>Al ready hava an acount <a href='#'>{label2}</a></span>
//     </>
//     )
// }



export default FormSignUp;
