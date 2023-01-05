// Function to use in case a signUp form is being created

const signup = async (datas) => {
  return await fetch("http://localhost:3001/api/v1/user/signup", {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};

export default signup;
