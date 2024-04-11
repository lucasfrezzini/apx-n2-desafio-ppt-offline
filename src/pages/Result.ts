export function initResult() {
  const result = document.createElement("div");
  result.classList.add("overlay", "overlay__win");

  result.innerHTML = `
  <div class="container overlay__container">
    <div class="star star--outside">
      <div class="star star--inside">Ganaste</div>
    </div>
    <div class="score">
      <h3>Resultado</h3>
      <h4>Vos: 2</h4>
      <h4>Maquina: 3</h4>
    </div>
    <button-el>Volver a jugar</button-el> 
  </div>
  `;

  document.querySelector("#app")!.appendChild(result);
}
