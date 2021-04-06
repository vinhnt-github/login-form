import React from 'react';
import { useContext,useReducer,useEffect } from 'react';
import {reducer} from '../reducers/Main.reducer'
import { 
    CREATE_USER
 } from './../reducers/ActionTypes';
 import defaultImage from './../assets/images/default-avatar.png'


let innitial_user = [
    {
        // id: UUID.v4,
        full_name: 'Nguyen Van A',
        adress: 'Ha Noi',
        email: 'a@gmail.com',
        phone : '0123456',
        lat : '21.027763',
        lng : '105.834160'
    },
    {
        // id: UUID.v4,
        full_name: 'Nguyen The B',
        adress: 'Ha Noi',
        email: 'b@gmail.com',
        phone : '0987456',
        lng : '106.629662',
        lat : '10.823099'
    },
    {
        // id: UUID.v4,
        full_name: 'Nguyen Van C',
        adress: 'Ha Noi',
        email: 'c@gmail.com',
        phone : '0123456',
        lat : '21.027763',
        lng : '105.834160'
    },
    {
        // id: UUID.v4,
        full_name: 'Nguyen The D',
        adress: 'Ha Noi',
        email: 'd@gmail.com',
        phone : '0987456',
        lng : '106.629662',
        lat : '10.823099'
    },
    {
        // id: UUID.v4,
        full_name: 'Nguyen The E',
        adress: 'Ha Noi',
        email: 'e@gmail.com',
        phone : '0987456',
        lng : '106.629662',
        lat : '10.823099'
    },
    {
        // id: UUID.v4,
        full_name: 'Nguyen Van G',
        adress: 'Ha Noi',
        email: 'a@gmail.com',
        phone : '0123456',
        lat : '21.027763',
        lng : '105.834160'
    },
    {
        // id: UUID.v4,
        full_name: 'Nguyen The H',
        adress: 'Ha Noi',
        email: 'b@gmail.com',
        phone : '0987456',
        lng : '106.629662',
        lat : '10.823099'
    },
    {
        // id: UUID.v4,
        full_name: 'Nguyen Van I',
        adress: 'Ha Noi',
        email: 'c@gmail.com',
        phone : '0123456',
        lat : '21.027763',
        lng : '105.834160'
    },
    {
        // id: UUID.v4,
        full_name: 'Nguyen The K',
        adress: 'Ha Noi',
        email: 'd@gmail.com',
        phone : '0987456',
        lng : '106.629662',
        lat : '10.823099'
    },
    {
        // id: UUID.v4,
        full_name: 'Nguyen The L',
        adress: 'Ha Noi',
        email: 'e@gmail.com',
        phone : '0987456',
        lng : '106.629662',
        lat : '10.823099'
    },

  

];


  
  const action = {
    type: 'DO_TODO',
    id: 'a',
  };
  
export const MainContext = React.createContext();

export function MainContextProvider({children}) {
    useEffect(() => {
        if(!localStorage.getItem('user')){
            console.log('aaaaaa');
            localStorage.setItem('user',JSON.stringify(innitial_user));
        }
    }, [])
    const [state, dispatch] = useReducer(reducer,localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):innitial_user)

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
