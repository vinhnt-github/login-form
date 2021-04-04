import { 
    BrowserRouter as Router,
    Switch,
    Route
 } from 'react-router-dom';
 import Home from '../pages/Home';
 import ListAccount from '../pages/ListAccount';
 import SignUp from '../pages/SignUp';
 

const router = [
    {
        path : '/',
        exact: true,
        component : Home
    },
    {
        path : '/SignUp',
        exact: true,
        component : SignUp
    },
    {
        path : '/ListAccount',
        exact: false,
        component : ListAccount
    }  
]

const MainRouter = () =>{
    return(
        <Switch>
            {
                router.map(({path,exact,component,...rest},index)=>
                    <Route key={index} component = {component} path = {path} exact  {...rest}/>
                )
            }
        </Switch>
    );
 }
export default MainRouter; 