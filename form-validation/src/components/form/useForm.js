import React ,{useState,useEffect} from "react";
const useForm = (validation)=>{
    const [values,setValues] = useState({
        userName:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const [errors , setErrors] = useState({});
    const [isSubmiting , setIssubmiting] = useState(false)

    const handleChange = (e)=>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name] : value
        })

       

    }
    const handleSubmit =(e)=>{
       e.preventDefault();
       setErrors(validation(values))
       setIssubmiting(true)

    }


    return {handleChange,values,handleSubmit,errors}
};





export default useForm ; 

