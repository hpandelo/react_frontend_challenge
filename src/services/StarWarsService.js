import RESOURCES from "../constants/resources";

const getSide = (masterName) => masterName === "Luke Skywalker" ? "JEDI" : "SITH";

const getPadawanMaster = async () => {
  const getJedi = fetch(RESOURCES.URLS.JEDI).then((resp) => resp.json());
  const getSith = fetch(RESOURCES.URLS.SITH).then((resp) => resp.json());
  const result = await Promise.race([getJedi, getSith]);

  const { name } = result;
  const side = getSide(name);
  const pictureUrl = RESOURCES.PICTURES[side];
  return { name, side, pictureUrl };
};

export default getPadawanMaster;