import { atom } from "recoil";

const isNightState = atom({
  key: "isNight",
  default: false,
});
export default isNightState;
