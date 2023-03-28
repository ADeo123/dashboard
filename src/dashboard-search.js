import { LitElement, html, css } from "lit";

const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

class DashboardSearch extends LitElement {
  static properties = {
    header: { type: String },
    cards: {type: Array},
    heading: {type: String},
    title: {type: String},
    authorTitle: {type: String},
    imageLink: {type: String},

  }

  static get styles(){
    return css`
      .card {
        text-align: center;
        border: 5px solid navy;
        padding: 10px 10px 10px 10px;
        width: 300px;
        height: 150px;
        background-color: white;
        display: flex;
        float: left;
        display: block;
        box-shadow: 0px 0px 5px black;
      }
      .image {
        padding: 10px 10px 10px 10px;
        width: 450px;
        margin: 0px auto;
      }
      .heading{
        margin: 50px;
      }
      @media (min-width: 500px) and (max-width: 800px) {
        button {
          opacity: 0;
          display: none;
        }
      }
      @media (max-width: 500px) {
        div {
          font-size: 10px;
          image-resolution: auto;
        }
      }
  `};

  constructor() {
    super();
    this.header = 'My app';
    this.heading = "test";
    this.title = "test";
    this.authorTitle = "test";
    this.imageLink = "test";
  }

  render() {
    return html`
      <div class="card">
         <h3 class="heading">${this.heading}</h3>
         <h1 class="title">${this.title}</h1>
         <h4 class="authorTitle">${this.authorTitle}</h4> </h4>
         <a class="imageLink" href="${this.imageLink}"></a>
      </div> 
    `;
  }
}

customElements.define("dashboard-search", DashboardSearch);
