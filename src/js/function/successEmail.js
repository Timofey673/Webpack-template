import { objects } from "../variables";
import toggleElem from "./toggleElem";

function successEmail() {
  toggleElem(objects.blockModalEmail, "show");
}

export default successEmail;
