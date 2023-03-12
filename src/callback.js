
import fetch from "node-fetch";
// setTimeout(() => {console.log("test");},2000);

// setInterval( () => {console.log("1 saniyede bir çalışan kod")},1000);

//const sayHi = (cb) => cb();

//sayHi( () => {console.log("Hello");});

async function getData(){
    const data = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    console.log(data);
}

getData();