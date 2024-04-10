class ButtonEl extends HTMLElement {
  constructor(text: string) {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Styles
    this.shadowRoot!.innerHTML = `
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
    `;
    // Logic HTML and JS
    this.shadowRoot!.innerHTML += `
    <button>
      <slot></slot>
    </button>
    `;
  }
}

customElements.define("button-el", ButtonEl);
