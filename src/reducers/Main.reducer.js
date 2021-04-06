import { 
  CREATE_USER
} from './ActionTypes'


export function reducer(state, {type,payload}) {
    switch (type) {
      case CREATE_USER:
        const {full_name,adress, email, phone} = payload;
        let users = [...state] 
        users.unshift({full_name,adress, email, phone});
        
        localStorage.setItem('user',JSON.stringify(users));
        console.log(JSON.parse(localStorage.getItem('user')));
        return [
          ...users
        ];
      default:
        throw new Error();
    }
}