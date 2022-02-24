import logo from './logo.svg';
import './App.css';
import ExampleUseRef from './ExampleUseRef';
import ExampleFormik from "./ExampleFormik"
import Registration from './Registration';
import Todos from './TodoApp';
function App() {
  return (
    <div className="App">
      <ExampleUseRef></ExampleUseRef>
      <ExampleFormik></ExampleFormik>
      <Registration></Registration>
      <Todos></Todos>

    </div>
  );
}

export default App;
