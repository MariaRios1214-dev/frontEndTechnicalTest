import { createStore } from "redux";

const initialState ={
  username: '',
  password: ''
}

const reducerFeatures =(state=initialState, action)=>{
  console.log('spruebaActio', action, state)
  switch(action.type){
    case 'LOGIN':
      return{
        username:action.payload.username,
        password:action.payload.password
      }
      default:
      return state
  }
};

export default createStore(reducerFeatures);