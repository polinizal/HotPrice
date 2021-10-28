import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  var innerHTML =  document.querySelectorAll("p.subtitle.is-6.price.hot");
  // var hottey = document.querySelectorAll(".price.hot"); 
  var flame = String.fromCodePoint(0x1f525);
  innerHTML.appendChild(flame);
}

)
