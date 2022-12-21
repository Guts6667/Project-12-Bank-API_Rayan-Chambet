// const redux = require("react-redux");

// /** Est-ce que ma requête est ok?
//  * Example of Request:
//  * Create an action called "login"
//  * Retrieve the inputs in the form then:
//  *
//  * fetch("/user/login", {
//  * method:"POST",
//  * body: JSON.stringify({
//  * email: inputEmail,
//  * password: inputPassword
//  * }),
//  * headers: {
//  * "Content-Type": "application/json"
//  * }
//  * })
//  *
//  * .then(res => res.json())
//  * .then(data => console.log(data));
//  *
//  */
const getDatas = () => {
  fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    body: JSON.stringify({
      email: "steve@rogers.com",
      password: "password456",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
export default getDatas;
