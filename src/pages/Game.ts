const game = document.createElement("section");
game.classList.add("game");

game.innerHTML = `
<div class="lifes lifes-top">
  <img src="/star.png" />
  <img src="/star.png" />
  <img src="/star.png" />
</div>

<div class="lifes lifes-bottom">
  <img src="/star.png" />
  <img src="/star.png" />
  <img src="/star.png" />
</div>

<img src="/piedra.svg" class="hand hand-machine" />
<h2>Gano la maquina está ronda</h2>
<img src="/papel.svg" class="hand hand-player" />
`;

document.querySelector("#app")!.appendChild(game);
