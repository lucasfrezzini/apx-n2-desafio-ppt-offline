const rules = document.createElement("section");
rules.classList.add("rules");

rules.innerHTML = `
<header>
  <h2>
    Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 4 segundos.
  </h2>
</header>
<button-el>¡Jugar!</button-el>
<bottom-hands></bottom-hands>
`;

document.querySelector("#app")!.appendChild(rules);