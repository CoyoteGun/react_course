import {useEffect, useState} from "react";

import './App.css';

import {UserForm, Users} from "./components";
import {userService} from "./services";




function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers([...data]))
    },[]);

  return (
    <div className="App">

      <UserForm setUsers={setUsers}/>
      <hr/>
      <Users users={users}/>

    </div>
  );
}

export {App};
