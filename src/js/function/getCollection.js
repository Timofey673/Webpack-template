import { request, objects } from "../variables";
import createRequest from "./createRequest";
import createCard from "./createCard";

async function getCollection(
  fetchUrl,
  fetchObj,
  numberOfCards = null,
  paginate = null
) {
  const data = await createRequest(request.url + fetchUrl);
  if (numberOfCards !== null || paginate !== null) {
    data.map((el, index) => {
      if (
        index >= numberOfCards * (paginate - 1) &&
        index < numberOfCards * paginate
      ) {
        createCard(el, fetchObj);
      }
    });
    var [...elemCount] = objects.pseudoNewItems.querySelectorAll(".season-items");
    if (
      elemCount.length > numberOfCards * (paginate - 1) &&
      elemCount.length <= numberOfCards * paginate
    ) {
      const height = objects.blockNewCollection.offsetHeight + 860;
      objects.blockNewCollection.style.height = height + "px";
    }
  } else {
    data.map((el, index) => {
      createCard(el, fetchObj);
    });
  }
}

export default getCollection;
