import './App.css';
import { SimpsonComponent } from "./components/SimpsonComponent/SimpsonComponent";
import {Simpsons} from "./components/Simpsons/Simpsons";
import {Character} from "./components/Character/Character";
import {Characters} from "./components/Characters/Characters";



const App = () => {

  return (
    <div>
      <Simpsons/>
        <Characters/>
    </div>
  );
};

export {App};