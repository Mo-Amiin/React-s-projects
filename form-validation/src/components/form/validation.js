

const validation = (values)=>{
    let errors = {}

    if(!values.userName.trim()){
         errors.userName="UserName required"
    }

    if(!values.email){
        errors.email="email required"
    }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        errors.email = "Email adress is invalid"}
    
    if(!values.password){
        errors.password = "Password required"
    }else if(values.password.length < 6){
        errors.password = "password needs to be 6 characters or more"
    }

    if(!values.confirmPassword){
        errors.confirmPassword = "confirmPassword"
    }else if(values.confirmPassword!== values.password){
        errors.confirmPassword = "password do not match"
    }
    
   return errors;


}


export default validation