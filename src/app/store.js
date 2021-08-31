import { createStore } from "redux";
import HttpServices from "../services/HttpServices";
const initialState ={
  username: '',
  password: ''
}

const getLogin =(payload)=>{
  console.log('user', payload.username);
  HttpServices().get(`/users/${payload.username}`)
  .then(response => console.log('response', response))
}

const reducerFeatures =(state=initialState, action)=>{
  console.log('spruebaActio', action, state)
  switch(action.type){
    case 'LOGIN':
      return (getLogin(action.payload))
    default:
    return state
  }
};

export default createStore(reducerFeatures);