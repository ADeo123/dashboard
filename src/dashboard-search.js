import { LitElement, html, css } from "lit";

const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

class DashboardSearch extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
   
  `;

  constructor() {
    super();
    this.header = "My app";
  }

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.header}</h1>

        <p>Edit <code>src/DashboardSearch.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define("dashboard-search", DashboardSearch);
