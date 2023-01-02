const getAssets = () => {
  fetch("/data/assets.json")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });
};

export default getAssets;
