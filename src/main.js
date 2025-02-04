import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class = 'bg-amber-300'>
    <div class='text-3xl'>Hello</div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
