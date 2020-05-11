
export const emailValidation = (value) =>{
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
     if(value!="" &&pattern.test(value) == false){
        return "Wrong Email Address";
     }else{
         return "";
     }
}

export const requiredFieldValidation = (field) =>{
   
}