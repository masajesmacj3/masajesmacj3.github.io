class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2022
        Muñoz Amador Carmen Juana.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
