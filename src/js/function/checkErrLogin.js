import { objects } from "../variables";
import toggleElem from "./toggleElem";

function checkErrLogin() {
  if (objects.blockErrLogin.classList.contains("show"))
    toggleElem(objects.blockErrLogin, "show");
  if (objects.blockErrPassword.classList.contains("show"))
    toggleElem(objects.blockErrPassword, "show");
}

export default checkErrLogin