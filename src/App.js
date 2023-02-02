
import './App.css';

import {UsersClassComponents} from "./components/ClassComponents/UsersClassComponents/UsersClassComponents";
import {CommentsClassComponents} from "./components/ClassComponents/CommentsClassComponents/CommentsClassComponents";

function App() {
  return (
    <div className="App">
        <UsersClassComponents/>
        <hr/>
        <CommentsClassComponents/>
    </div>
  );
}

export default App;
