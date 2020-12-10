import { objects, request } from "../variables";
import createRequest from "./createRequest";
import toggleElem from "./toggleElem";

async function checkUser() {
  const data = await createRequest(request.url + request.user);
  const result = data.filter((item) => item.login == objects.inputLogin.value);
  if (result.length == 0 || result[0].login != objects.inputLogin.value) {
    objects.inputLogin.value = "";
    if (!objects.blockErrLogin.classList.contains("show"))
      toggleElem(objects.blockErrLogin, "show");
    return;
  } else if (result[0].password != objects.inputPassword.value) {
    objects.inputPassword.value = "";
    if (!objects.blockErrPassword.classList.contains("show"))
      toggleElem(objects.blockErrPassword, "show");
    return;
  }
  objects.btnEntrance.textContent = "Выход";
  objects.inputLogin.value = "";
  objects.inputPassword.value = "";
  toggleElem(objects.blockModalLogin, "show");
}

export default checkUser;
