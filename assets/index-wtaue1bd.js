var m=Object.defineProperty;var f=(e,t,s)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var u=(e,t,s)=>(f(e,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();function g(){const e=document.createElement("section");e.classList.add("choice"),e.innerHTML=`
  <counter-time></counter-time>
  <p class="alert hidden">¡Tenes que elegir!</p>
  <bottom-hands is-big></bottom-hands>
  `,setTimeout(()=>{const t=document.querySelector(".alert");t==null||t.classList.remove("hidden")},4e3),document.querySelector("#app").replaceChildren(e)}const r={data:{resultGame:"",playerWins:0,pcWins:0,playerChoice:""},listeners:[],getState(){return this.data},setWinnerGame(){this.data.playerWins===3?this.data.resultGame="Ganaste":this.data.resultGame="Perdiste"},setWinnerRound(e){e==1?this.data.playerWins=this.data.playerWins+1:this.data.pcWins=this.data.pcWins+1},addChoice(e){this.data.playerChoice=e},resetGame(){this.data.pcWins=0,this.data.playerWins=0,this.data.playerChoice=""}};function y(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function v(){return["piedra","papel","tijera"][y(0,2)]}function b(e,t){let s;return e===t?s=0:e==="piedra"&&t==="tijera"||e==="papel"&&t==="piedra"||e==="tijera"&&t==="papel"?s=1:s=2,s}const w=["Empataron esta ronda","Ganaste esta ronda","Perdiste esta ronda"];function L(){const e=r.getState();let{pcWins:t,playerWins:s}=e;const{playerChoice:a}=e,n=v(),o=b(a,n);o!=0&&(o==1?s++:t++),x(t,s,o,n,a),setTimeout(()=>{o!=0?(r.setWinnerRound(o),s==3||t==3?(r.setWinnerGame(),l("/result")):l("/choice")):l("/choice")},3e3)}function x(e,t,s,a,n){const o=document.createElement("section");o.classList.add("game");const i=document.createElement("div");i.classList.add("lifes","lifes-top");for(let c=0;c<e;c++)i.innerHTML+='<img src="/star.png" />';const d=document.createElement("div");d.classList.add("lifes","lifes-bottom");for(let c=0;c<t;c++)d.innerHTML+='<img src="/star.png" />';o.appendChild(i),o.appendChild(d),o.innerHTML+=`
  <img src="/${a}.svg" class="hand hand-machine" />
  <h2>${w[s]}</h2>
  <img src="/${n||"papel"}.svg" class="hand hand-player" />
  `,document.querySelector("#app").replaceChildren(o)}function T(){const e=document.createElement("section");e.classList.add("home"),e.innerHTML=`
  <header>
    <h1>
      Piedra<br/> Papel <span>ó</span><br/> Tijera
    </h1>
  </header>
  <button-el to="/rules">Empezar</button-el>
  <bottom-hands></bottom-hands>
  `,document.querySelector("#app").replaceChildren(e)}function E(){const e=r.getState();let t="overlay__win";e.pcWins===3&&(t="overlay__lose");const s=document.createElement("div");s.classList.add("overlay",t),s.innerHTML=`
  <div class="container overlay__container">
    <div class="star star--outside">
      <div class="star star--inside">${e.resultGame}</div>
    </div>
    <div class="score">
      <h3>Resultado</h3>
      <h4>Vos: ${e.playerWins}</h4>
      <h4>Maquina: ${e.pcWins}</h4>
    </div>
    <button-el to="/choice" reset>Volver a jugar</button-el> 
  </div>
  `,document.querySelector("#app").appendChild(s)}function M(){const e=document.createElement("section");e.classList.add("rules"),e.innerHTML=`
  <header>
    <h2>
      Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
      El mejor de 3 gana.
    </h2>
  </header>
  <button-el to="/choice">¡Jugar!</button-el>
  <bottom-hands></bottom-hands>
  `,document.querySelector("#app").replaceChildren(e)}const H=[{path:"/",render:T},{path:"/rules",render:M},{path:"/choice",render:g},{path:"/game",render:L},{path:"/result",render:E}];function p(e){H.forEach(t=>{t.path==e&&t.render()})}function l(e){history.pushState({},"",e),p(e)}class R extends HTMLElement{constructor(){super();u(this,"route");this.route=this.getAttribute("to"),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>
      button {
        font-family: "Dosis", sans-serif;
        width: 100%;
        padding: 10px;
        background-color: var(--color-blue-light);
        border: 5px solid var(--color-blue);
        border-radius: 5px;
        color: white;
        font-size: 28px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        cursor: pointer;
      }
    </style>
    `,this.shadowRoot.innerHTML+=`
    <button>
      <slot></slot>
    </button>
    `,this.shadowRoot.addEventListener("click",()=>{this.hasAttribute("reset")&&(r.resetGame(),console.log("Reseteo hecho")),l(this.route)})}}customElements.define("button-el",R);function h(e){r.addChoice(e),l("/game")}class C extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>
      .bottom-hands {
        width: 100%;
        display: flex;
        gap: 40px;
        align-items: end;
        justify-content: space-evenly;
        overflow-y: hidden;
      }

      .bottom-hands img {
          cursor: pointer;
          transition: all .5s;
      }
    </style>
    `,this.hasAttribute("is-big")?this.shadowRoot.innerHTML+=`
      <style>
        .bottom-hands {
          overflow-y: hidden;
          height: 300px;
        }

        .bottom-hands img {
          transform: translateY(30px) scale(1.4);
        }
        
        .bottom-hands:hover img {
          opacity: 0.8;
        }

        .bottom-hands img:hover {
          transform: translateY(-10px) scale(2.2);
          opacity: 1;
        }
      </style>
      `:this.shadowRoot.innerHTML+=`
      <style>
        
        .bottom-hands img {
          transform: translateY(30px);
        }

        .bottom-hands img:hover {
          transform: translateY(2px);
        }
      </style>
      `,this.shadowRoot.innerHTML+=`
    <div class="bottom-hands">
      <img src="/piedra.svg" data-type="stone" alt="Icono Piedra">
      <img src="/papel.svg" data-type="paper" alt="Icono Papel">
      <img src="/tijera.svg" data-type="scissor" alt="Icono Tijera">
    </div>
    `,this.hasAttribute("is-big")&&(this.shadowRoot.querySelector('[data-type="stone"]').addEventListener("click",function(){h("piedra")}),this.shadowRoot.querySelector('[data-type="paper"]').addEventListener("click",function(){h("papel")}),this.shadowRoot.querySelector('[data-type="scissor"]').addEventListener("click",function(){h("tijera")}))}}customElements.define("bottom-hands",C);function W(e,t){e.innerHTML=String(--t)}class S extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>
      .time__circle {
        width: 300px;
        height: 300px;
      }

      .time__circle text {
        font-size: 50px;
        line-height: 0;
        font-weight: 800;
      }
    </style>
    `,this.shadowRoot.innerHTML+=`
    <div class="time__circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" xml:space="preserve">
          <circle fill="none" stroke="#000" stroke-width="7" cx="50" cy="50" r="35" stroke-dasharray="360" stroke-linecap="round" transform="rotate(-90 ) translate(-100 0)" >
              <animate attributeName="stroke-dashoffset" values="360;0" dur="5s"></animate>
          </circle>
          <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle">3</text>
      </svg>
    </div>
    `;let t=3;const s=this.shadowRoot.querySelector("text"),a=setInterval(()=>{W(s,t),t--,t==0&&clearInterval(a)},1e3)}}customElements.define("counter-time",S);window.addEventListener("load",()=>{p(location.pathname)});
