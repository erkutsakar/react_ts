
import './App.css';

function App() {
  let name : string = "Erkut";
  let age : number = 26;
  let done : boolean = true;
  let trial : number | string =  "deneme";


  
  let obj = {
    name: "Deniz",
    age: 10,
    done: true
  }

  return (
    <div className="App">
     {name + " _ " + age }
    </div>
  );
}

export default App;
