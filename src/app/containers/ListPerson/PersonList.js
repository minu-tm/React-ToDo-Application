import React,{useState, useEffect} from 'react';
import '../ListPerson/PersonList.css'
import Loader from '../../components/Loader/Loader';
import Navigation from '../../components/NavigationBar/Navgigation'

const PersonList = ()=>{
    const [Person, SetPerson] = useState([]);
    const [isLoading, SetLoading] = useState(false);
    //load Person Details
    useEffect(() => {
        SetLoading(true);
        fetch('https://todo-app-fe05a.firebaseio.com/Persons.json')
        .then(response => response.json())
        .then(responseData=>{
                const personList = [];
                for(const key in responseData){
                    personList.push({
                        id:key,
                        firstName:responseData[key].firstName,
                        lastName:responseData[key].lastName,
                        email:responseData[key].email,
                        phoneNumber:responseData[key].phoneNumber
                    });
                }
                SetPerson(personList);
                SetLoading(false);
            })
            .catch(err=>{

            })
    },Person);

    const onDeleteHandler = (id) => {
        SetLoading(true);
        fetch(
            `https://todo-app-fe05a.firebaseio.com/Persons/${id}.json`,
            {
              method: 'DELETE'
            }
        ).then(response=>response.json())  
        .then(responseData=>{
             SetPerson(previousState=>{
            previousState.filter(person=>person.id !== previousState.id);
            });
            SetLoading(false);
        })
    }

    return (
        <div>
            <Navigation/>
        {isLoading && (<Loader/>)}
        <h2>Person Details</h2>
        <div className="container">
            {Person.length == 0 && (
                <div className="text-center">
                    <h2>No Person found at the moment</h2>
                </div>
            )}

            <div className="row">
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Person && Person.map(person =>
                        <tr key={person.id}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.email}</td>
                            <td>{person.phoneNumber}</td>
                            <td>
                            <button className="btn btn-success" type="button" onClick={() => onDeleteHandler(person.id)}>
                                Delete Person </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default PersonList;