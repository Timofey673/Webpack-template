//var Slider = require("bootstrap-slider");
import { objects, request } from "./variables";
import getCollection from "./function/getCollection";
import validateMail from "./function/validateMail";
import toggleElem from "./function/toggleElem";
import checkUser from "./function/checkUser";
import checkErrLogin from "./function/checkErrLogin";
import createFilter from "./function/createFilter";
import clearNewSection from "./function/clearNewSection"

let paginateNewCollection = 1;
//var mySlider = new Slider("#my-slider", {});

window.onload = () => {
  getCollection(request.collection, objects.pseudoSeason);
  getCollection(request.new, objects.pseudoNewItems, 8, paginateNewCollection);
};

objects.btnNewCollection.onclick = function () {
  paginateNewCollection++;
  getCollection(request.new, objects.pseudoNewItems, 8, paginateNewCollection);
};

objects.btnSendMail.onclick = function () {
  validateMail(objects.inputEmail.value);
};

objects.btnModalOk.onclick = function () {
  toggleElem(objects.blockModalEmail, "show");
  objects.inputEmail.value = "";
};

objects.btnEntrance.onclick = function () {
  if (objects.btnEntrance.textContent == "Войти / Регистрация")
    toggleElem(objects.blockModalLogin, "show");
  else objects.btnEntrance.textContent = "Войти / Регистрация";
};

objects.btnSendForm.onclick = function () {
  checkUser();
  return false;
};

objects.btnCloseForm.onclick = function () {
  toggleElem(objects.blockModalLogin, "show");
};

objects.inputLogin.onclick = () => {
  checkErrLogin();
};

objects.btnFilter.onclick = () => {
  toggleElem(objects.blockFilter, "filter-show");
};

objects.btnClearFilter.onclick = () => {
  mySlider.refresh();
};

objects.btnApplyFilter.onclick = () => {
  paginateNewCollection = 1;
  const price = mySlider.getValue();
  clearNewSection()
  objects.blockNewCollection.style.height =  0;
  createFilter(paginateNewCollection, price);
};
