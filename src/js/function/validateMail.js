import { objects } from "../variables";
import successEmail from "./successEmail";
import toggleElem from "./toggleElem";

function validateMail(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(email)) successEmail();
  else toggleElem(objects.blockErrEmail, "show");
}

export default validateMail;
