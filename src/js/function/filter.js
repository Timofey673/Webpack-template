import { objects } from "../variables";
import getCheckedCheckBoxes from "./getCheckedCheckBoxes";

function filters(list, price) {
  const checkBoxes = getCheckedCheckBoxes();

  const arrBrand = list.filter(function (elem) {
    let brandTrigger = false;
    let sexTrigger = false;
    let priceTrigger = false;

    if (
      objects.inputBrand.value == "" ||
      elem.brand.includes(objects.inputBrand.value)
    ) {
      brandTrigger = true;
    }
    if (checkBoxes.length == 0 || checkBoxes.length == 3) {
      sexTrigger = true;
    } else {
      getCheckedCheckBoxes().forEach(function (item) {
        sexTrigger = true;
      });
    }
    if (elem.price >= price[0] && elem.price <= price[1]) {
      priceTrigger = true;
    }
    if (brandTrigger && sexTrigger && priceTrigger) {
      return true;
    }
  });
  return arrBrand;
}

export default filters;
