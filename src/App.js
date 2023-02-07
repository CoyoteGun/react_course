import './App.css';
import {Header} from "./components/Header/Header";
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
        <Header/>
        <hr/>
        <Users/>
        <hr/>
        <Posts/>
    </div>
  );
}

export default App;
