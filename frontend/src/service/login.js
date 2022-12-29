const login = (email, password) => {
  fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      window.localStorage.setItem("token", res.body.token);
      return res.body.token;
    });
};

export default login;
