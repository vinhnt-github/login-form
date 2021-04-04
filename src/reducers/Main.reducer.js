import { 
  CREATE_USER
} from './ActionTypes'


export function reducer(state, {type,payload}) {
    switch (type) {
      case CREATE_USER:
        const {full_name,adress, email, phone} = payload;
        let users = [...state] 
        users.push({full_name,adress, email, phone});
        return [
          ...users
        ];
      default:
        throw new Error();
    }
}