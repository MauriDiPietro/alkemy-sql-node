
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(error => console.log(error))
// .finally(() => console.log("Petición finalizada"));

/* ------------------------------------ - ----------------------------------- */
import axios from "axios";

// axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Petición finalizada"));


axios.get('http://localhost:8080/students')
    .then(response => console.log(response.data))
    .catch(error => console.log(error))