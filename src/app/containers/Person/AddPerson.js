import React,{useState} from 'react';
import './Person.css';
import CustomInput from '../../components/input';
// import { ToastContainer, toast } from 'react-toastify';

const AddPerson = (props) => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[phoneNumber, setPhoneNumber] =useState('');
    
   const submitHandler = (event) => {
       event.preventDefault();
       let data = {firstName:firstName,lastName:lastName,email:email,phoneNumber:phoneNumber};
       var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
       let errMsg = "";
       if(firstName===""||lastName===""||email===""||phoneNumber===""){
        errMsg+="Fields are empty\n";
       }
       if(email!=="" && pattern.test(email)=== false){
        errMsg+="Email format mismatch\n"
       }
       alert(errMsg);
       if(errMsg===""){
        fetch('https://todo-app-fe05a.firebaseio.com/Persons.json',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json'}
        }).then(response=>{
            console.log(response);
            props.history.push('/list');
        }).catch(err=>{
            console.log(err);
        })
       
       }
    }
    return(
        <div className="ingredient-form">
            <div className="card">
            <h4>Add Person Details</h4>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label>First Name</label>
                    <CustomInput className="form-control"  placeholder="Your first name.."
                        value={firstName}
                        onChange={event=>setFirstName(event.target.value)} />
                </div>
                <div className="form-control">
                <label>Last Name</label>
                    <CustomInput className="form-control"  placeholder="Your Last name.." 
                        value={lastName}
                        onChange={event=>setLastName(event.target.value)}
                    />

                </div>    
                <div className="form-control">
                <label>Email</label>
                <CustomInput className="form-control"  placeholder="Your Email.." 
                        value={email}
                        onChange={event=>setEmail(event.target.value)}
                />
                </div>    
                <div className="form-control">
                <label>PhoneNumber</label>
                    <CustomInput className="form-control" placeholder="Your Phone number.." 
                        value={phoneNumber}
                        onChange={event=>setPhoneNumber(event.target.value)}
                    />
                </div>    
                <div className="ingredient-form__actions">
                    <button type="submit">Add Person</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default AddPerson;
