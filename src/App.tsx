
import './App.css';

function App() {
  let name : string = "Erkut";
  let age : number = 26;
  let done : boolean = true;
  let trial : number | string =  "deneme";

type Obj = {
   name : string,
   age : number,
   done? : boolean

}
  
  let obj: Obj = {
    name: "Deniz",
    age: 10,
    done: true
  }

  var slugify = require('slugify');
  const title = slugify("erkut adem sakar", "***");

  return (
    

    <div className="App">
     {name + " _ " + age + " " + title }
    </div>
  );
}

export default App;

