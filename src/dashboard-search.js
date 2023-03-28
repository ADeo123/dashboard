import { LitElement, html, css } from "lit";

const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

export class DashboardSearch extends LitElement {
  static properties = {
    header: { type: String },
    heading: { type: String },
    title: { type: String },
    authorTitle: { type: String },
    imageLink: { type: String },
  };

  static get styles() {
    return css`
      .wrapper {
        background-color: lightgray;
        color: white;
        padding: 2px 2px 2px 20px;
        text-align: center;
        width: 400px;
        height: auto;
        border-radius: 5px;
      }

      .badgeTitle {
        background-color: lightblue;
        color: white;
        padding: 10px 8px;
        text-align: left;
        border-radius: 5px;
        color: black;
      }
      .badgeBody {
        background-color: white;
        color: black;
        text-align: left;
        padding: 2px 2px 2px 5px;
        font-size: 20px;
      }
      .author {
        background-color: white;
        text-align: left;
        color: black;
        padding: 2px 2px 2px 5px;
      }
      .img {
        text-align: right;
        background-color: white;
      }
      .tblock {
        color: black;
        padding: 12px 20px 15px 20px;
        background-color: grey;
        margin: 25px;
      }
      .bblock {
        color: black;
        padding: 12px 20px 15px 20px;
        background-color: grey;
        margin: 25px;
      }
    `;
  }

  constructor() {
    super();
    this.header = "My app";
    this.heading = "test";
    this.title = "test";
    this.authorTitle = "test";
    this.imageLink = "test";
  }


  render() {
    return html`
      <div class="wrapper">
        <div class="badgeTitle">Technology & information</div>
        <div class="badgeBody">APA Style Citations: Introduction</div>
        <div class="img">
          <img
            src="https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png"
            width="100"
            height="100"
          />
        </div>
        <div class="author">Creator: Andrew Morrison</div>
      </div>
    `;
  }
}

customElements.define("dashboard-search", DashboardSearch);
