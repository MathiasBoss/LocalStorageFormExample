function createNewCar(event){

  event.preventDefault();

  const name = document.querySelector("[name = 'carName']").value;
  const color = document.querySelector("[name = 'color']").value;
  const description = document.querySelector("[name = 'description']").value;
  const image = document.querySelector("[name = 'image']").files[0].name;

  const car = {name, image, color, description};

  console.log(car);

  const carList = JSON.parse(window.localStorage.getItem("carList")) || [];
  carList.push(car);
  window.localStorage.setItem("carList", JSON.stringify(carList));

  event.target.reset()
  renderProductList();

}

function renderProductList() {
  //Retrives the value of the localstorage item "carList" AS A STRING "text"
  const carListJSON = window.localStorage.getItem("carList")

  const carList = JSON.parse(window.localStorage.getItem("carList")) || [];
  const carListEl = document.getElementById("carList");
  carListEl.innerHTML = "";
  for(car of carList){
    const carEl = document.createElement("div");
    const { name, image, color, description } = car;
    carEl.innerHTML = "<h3>" + name + "</h3>" +
      ( image ? `<div><img src='${image}' /><div>` : "") +
      "<div>" + color + "<div>" +
      "<div>" + "<small>" + description + "</small>" + "<div>"
    carListEl.appendChild(carEl);
  }
}

renderProductList();

window.addEventListener("storage", function(event) {
  if (event.key === "carList") {
    renderProductList();
  }
})
