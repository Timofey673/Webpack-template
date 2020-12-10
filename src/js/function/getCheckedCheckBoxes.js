import { objects } from "../variables";

function getCheckedCheckBoxes() {
  const [...cbArr] = objects.inputCheckSex;
  var checkBoxesChecked = [];
  cbArr.map((el, index) => {
    if (el.checked) {
      checkBoxesChecked.push(el.value);
    }
  });

  return checkBoxesChecked;
}

export default getCheckedCheckBoxes;
