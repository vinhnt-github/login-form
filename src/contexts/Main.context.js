import React from 'react';
import { useContext,useReducer } from 'react';
import {reducer} from '../reducers/Main.reducer'
import { 
    CREATE_USER
 } from './../reducers/ActionTypes';
 import defaultImage from './../assets/images/default-avatar.png'


const users = [
    {
        // id: UUID.v4,
        full_name: 'Nguyen Van A',
        adress: 'Ha Noi',
        email: 'a@gmail.com',
        phone : '0123456'
    },
    {
        // id: UUID.v4,
        full_name: 'Nguyen The B',
        adress: 'Ha Noi',
        email: 'b@gmail.com',
        phone : '0987456'
    },
  ];
  
  const action = {
    type: 'DO_TODO',
    id: 'a',
  };
  
export const MainContext = React.createContext();

export function MainContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, users)

    const addUser = (newUser)=> {
        dispatch({
            type: CREATE_USER,
            payload: newUser,
        });
    }

    return(
        <MainContext.Provider value = {{state,addUser}}>
            {children}
        </MainContext.Provider>
    );
};
