import { useReducer, useRef} from 'react';
import '../styles/App.css';

const appReducer = (state, action) => {
    switch(action.type){
        case ADD_USER : {
           return {
               users: [...state.users, action.payload]
           }
        }
    }
}

const ADD_USER = 'ADD_USER'


function ReducerEx() {

    const inputName = useRef(null)
    const inputAge = useRef(null)


    const initialState = {users: [
        {name: 'aladsadn', age: 30},
        {name: 'bicho', age: 30}

    ]}

 

    const [state, dispatch] = useReducer(
        appReducer,
        initialState
    );

    const addUser = () => {
       const name = inputName.current.value 
       const age = inputAge.current.value 

       const newUser = {name, age}

       dispatch({
           type: ADD_USER,
           payload: newUser
       });
    }

  return (
      <div className="App">
          {state.users.map(user => (
            <div>{ `${user.name} ${user.age}`}</div>
          ))}

          <form className="form-register">
            <label>Name:  </label>
            <input ref={inputName} />
            <label>Age:  </label>
            <input ref={inputAge} />
          </form>

          <button className="btn-register" onClick={() => addUser()}>Add user</button>
      </div>
  );
}

export default ReducerEx;