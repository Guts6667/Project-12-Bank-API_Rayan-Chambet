const getToken = async (email, password) => {
  return await fetch("http://localhost:3001/api/v1/user/login", {
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
      return res;
    });
};

export default getToken;
