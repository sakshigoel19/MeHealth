import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {firebase} from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';

const App = (props) => {
    return(
        <BrowserRouter>
            <Routes
            {...props}/>
        </BrowserRouter>
    )
}

firebase.auth().onAuthStateChanged((user)=>{
ReactDOM.render(<App user = {user}/>, document.getElementById('root'));
})