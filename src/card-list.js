import { LitElement, html, css } from 'lit';
import "./dashboard-search.js";
import "./search-widget.js";

export class cardList extends LitElement {
    static get tag() { return 'card-list'; }

    static get properties () {
        return {
          cards: {type: Array},
          cardList: {type: String},
      } 
}

    constructor(){
        super();
        this.cards = [{
            "header": "My app",
            "heading": "New Recipe",
            "title": "Spaghetti Carbonara",
            "authorTitle": "By John Smith",
            "iconColor": "green",
            "iconName": "places:kitchen"
          },
          {
            "header": "My app",
            "heading": "New Recipe",
            "title": "Beef Stroganoff",
            "authorTitle": "By Sarah Lee",
            "iconColor": "red",
            "iconName": "places:kitchen"
          },
          {
            "header": "My app",
            "heading": "New Recipe",
            "title": "Pad Thai",
            "authorTitle": "By Alex Wong",
            "iconColor": "purple",
            "iconName": "places:kitchen"
          },
          {
            "header": "My app",
            "heading": "New Recipe",
            "title": "Chicken Alfredo",
            "authorTitle": "By Samantha Kim",
            "iconColor": "blue",
            "iconName": "places:kitchen"
          },
          {
            "header": "My app",
            "heading": "New Recipe",
            "title": "Salmon Teriyaki",
            "authorTitle": "By Mike Chen",
            "iconColor": "orange",
            "iconName": "places:kitchen"
          },
          {
            "header": "My app",
            "heading": "New Recipe",
            "title": "Lemon Chicken",
            "authorTitle": "By Emily Chen",
            "iconColor": "green",
            "iconName": "places:kitchen"
          },
          {
            "header": "My app",
            "heading": "New Recipe",
            "title": "Beef and Broccoli",
            "authorTitle": "By Jason Lee",
            "iconColor": "yellow",
            "iconName": "places:kitchen"
          },
          {
            "header": "My app",
            "heading": "New Recipe",
            "title": "Fish Tacos",
            "authorTitle": "By Juan Perez",
            "iconColor": "teal",
            "iconName": "places:kitchen"
          },
          {
            "header": "My app",
            "heading": "New Recipe",
            "title": "Vegan Curry",
            "authorTitle": "By Maria Rodriguez",
            "iconColor": "pink",
            "iconName": "places:kitchen"
          },
          {
            "header": "My app",
            "heading": "New Recipe",
            "title": "Tomato Soup",
            "authorTitle": "By James Smith",
            "iconColor": "brown",
            "iconName": "places:kitchen"
          }];
        this.cardList = '';
        this.getSearchResults().then((data) => {
            this.cards = data;
        });
    }
    
    static get styles(){
        return css`
        :host{
            display: block; 
        }
        .wrapper{
            border: 2px solid black; 
            display: flex;
        }
        .item{
            display: inline-flex
        }
    `;
    }

    async getSearchResults(value = ' '){
        const address = `/api/list?search=${value}`;
        const results = await fetch(address).then((response)=> {
            if(response.ok){
                return response.json()
            }
            return [];
        })
        .then((data)=>{
            return data;
        });
        return results; 
    }

    async _handleSearchEvent(e){
        const searchTerm = e.detail.value; 
        this.cards = await this.getSearchResults(searchTerm);
    }

//<dashboard-search> make sure to change the different fields to fit the scope of the project 
    render(){
        return html`
        <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
        <div class="wrapper">
            <h1>${this.cardList}</h1>
                ${this.cards.map((card) => html`
                <div class="item">
                <dashboard-search title="${card.title}" authorTitle="${card.authorTitle}" heading="${card.heading}" iconColor="${card.iconColor}" iconName="${card.iconName}"></dashboard-search>
                `)}
            </div>
        </div>
        `;
    }
}
customElements.define(cardList.tag, cardList);