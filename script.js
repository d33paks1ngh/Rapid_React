const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h1", {}, "hello I am grinding again");
heading.className = "forReact";
const btn = document.querySelector("button");
btn.addEventListener("mouseover", function () {
  document.getElementsByTagName("h1")[0].classList.add("forReact");
  console.log("event working");
});
btn.addEventListener("mouseleave", function () {
  document.getElementsByTagName("h1")[0].classList.remove("forReact");
  console.log("event working");
});

root.render(heading);
