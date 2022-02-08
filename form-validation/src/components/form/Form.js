import React, {useState,useEffect} from 'react';
import FormSignUp from './FormSignUp';
import FormSucces from './formSucces';


const Form = () =>{
const [isSubmited , setIsSubmited] = useState(false)
function submitForm (){
    setIsSubmited(true)
}
  return <div className='form'>
      <FormSignUp/>
      {isSubmited ? 
      <FormSignUp submitForm={submitForm}/>:<FormSucces/>}
  </div>;
}

export default Form;
