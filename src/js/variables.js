const objects = {
  pseudoSeason: document.querySelector(".pseudo-season"),
  pseudoNewItems: document.querySelector(".new-items"),
  btnNewCollection: document.querySelector(".btn-new-collection"),
  btnSendMail: document.querySelector(".send"),
  btnModalOk: document.querySelector(".ok"),
  btnEntrance: document.querySelector(".entrance"),
  btnSendForm: document.querySelector(".btn-send-form"),
  btnCloseForm: document.querySelector(".close-form"),
  btnFilter: document.querySelector(".btn-filter"),
  btnClearFilter: document.querySelector(".btn-clear"),
  btnApplyFilter: document.querySelector(".btn-apply"),
  blockNewCollection: document.querySelector(".new-container"),
  blockErrEmail: document.querySelector(".hidden-message"),
  blockErrLogin: document.querySelector(".hidden-message-login"),
  blockErrPassword: document.querySelector(".hidden-message-password"),
  blockModalEmail: document.querySelector(".modal-email"),
  blockModalLogin: document.querySelector(".modal-login"),
  blockFilter: document.querySelector(".filter-container"),
  inputEmail: document.querySelector(".input-email"),
  inputLogin: document.querySelector(".input-login"),
  inputPassword: document.querySelector(".input-password"),
  inputBrand: document.querySelector("#filterBrand"),
  inputCheckSex: document.querySelectorAll(".form-check-input"),
};
const request = {
  url: "http://127.0.0.1:3009/",
  collection: "collection",
  new: "new",
  user: "login",
};

export { objects, request };
