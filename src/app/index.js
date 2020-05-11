import React,{Component} from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component{
render(){
  return(
    <BrowserRouter>
      <AppRouter/>
      <ToastContainer/>
    </BrowserRouter>
  )} 
}



