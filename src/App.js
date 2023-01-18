import './App.css';
import { SimpsonComponent } from "./components/SimpsonComponent/SimpsonComponent";

const App = () => {
  return (
    <div className="App">
      <SimpsonComponent
          itemName={'Homer'}
          pctr={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
      />

      <SimpsonComponent
          itemName={'Bart'}
          pctr={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
      />
    </div>
  );
}

export {App};
