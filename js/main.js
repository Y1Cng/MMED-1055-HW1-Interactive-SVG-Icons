console.log("JS file connected");

// cookie
const cookie = document.querySelector("#cookie");

function logTheId() {
  console.log("You clicked on: " + this.id);
}

cookie.addEventListener("click", logTheId);

// cake
const cake = document.querySelector("#cake");

function logTheId() {
  console.log("You clicked on: " + this.id);
}

cake.addEventListener("click", logTheId);

// pudding
const pudding = document.querySelector("#pudding");

function logTheId() {
  console.log("You clicked on: " + this.id);
}

pudding.addEventListener("click", logTheId);
