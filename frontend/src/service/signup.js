// Service to use in case we create a form to signUp

const signup = (datas) => {
  fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    body: JSON.stringify({
      email: datas.email,
      password: datas.password,
      firstName: datas.firstName,
      lastName: datas.lastName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export default signup;
