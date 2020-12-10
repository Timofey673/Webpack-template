function clearNewSection () {
let elem = document.querySelectorAll(".season-items")
elem.forEach(function(item) {
    item.remove()
  })
}

export default clearNewSection