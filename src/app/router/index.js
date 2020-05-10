import React,{Component} from 'react';
import { Switch, Route } from "react-router-dom";
import AddPerson from '../containers/Person/AddPerson';
import ListPerson from '../containers/ListPerson/PersonList';


export default class AppRouter extends Component {
  render () {
      return (
        <Switch>
            <Route path="/" exact component={AddPerson} />
            <Route path="/list" component={ListPerson} />
        </Switch>
      )
  }  
}
