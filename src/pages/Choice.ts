export function initChoice() {
  const choice = document.createElement("section");
  choice.classList.add("choice");

  choice.innerHTML = `
  <counter-time></counter-time>
  <bottom-hands is-big></bottom-hands>
  `;

  document.querySelector("#app")!.replaceChildren(choice);
}
