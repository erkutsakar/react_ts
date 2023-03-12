
import './App.css';
import {hello,topla,cikar,title_,user} from './my-module';
import fetch from "node-fetch";

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

console.log(topla(3,5));
console.log(cikar(4,2));
console.log(title_);
console.log(user);

hello("Erkut");

  return (
    

    <div className="App">
     {name + " _ " + age + " " + title }
    </div>
  );
}

export default App;

