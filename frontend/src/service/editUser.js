// Service for user datas editing

const editUser = async (firstName, lastName, token) => {
  return await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });
};

export default editUser;
