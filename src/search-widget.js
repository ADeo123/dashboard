import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class SearchWidget extends LitElement {
  static properties = {
    value: {type: String},
  };

  static get styles() {
    return css`
      :host{
        display: block; 
      }
      simple-icon{
        display: inline block;
        --simple-icon-height: 24px;
        --simple-icon-width: 24px;
      }
    `;
  }

  constructor() {
    super();
    this.value = " ";
  }

  render() {
    return html`
      <simple-icon icon="icons-search"></simple-icons>
      <input type="text" value="${this.value}" @input="${this._handleInput}">
    `;
  }
  
  _handleInput(e){
    this.value = e.targetValue;
    this.dispatchEvent(new CustomerEvent('search', {
        detail: this.value,
    }));
  }
}

customElements.define("search-widget", SearchWidget);
