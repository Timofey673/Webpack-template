import { request, objects } from "../variables";
import createRequest from "./createRequest";
import createCard from "./createCard";
import filters from "./filter";

async function createFilter(paginate, price) {
  const numberOfCards = 8;
  const data = await createRequest(request.url + request.new);
  const fltr = filters(data, price);
  fltr.map((el, index) => {
    if (
      index >= numberOfCards * (paginate - 1) &&
      index < numberOfCards * paginate
    ) {
      createCard(el, objects.pseudoNewItems);
    }
  });
  var [...elemCountFilter] = objects.pseudoNewItems.querySelectorAll(".season-items");
  if (
    elemCountFilter.length > numberOfCards * (paginate - 1) &&
    elemCountFilter.length <= numberOfCards * paginate
  ) {
    const height = objects.blockNewCollection.offsetHeight + 860;
    objects.blockNewCollection.style.height = height + "px";
  }
}

export default createFilter;
