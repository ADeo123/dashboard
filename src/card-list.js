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
        this.cards = [];
        this.cardList = 'Badge Card List';
    }
    
    searchThis(items, searchForThis){
        return items.filter((thing) => 
        {
          for (var item in thing)
          {
            if (thing[item].toString().toLowerCase().includes(searchForThis.toLowerCase()))
            {
              return true;
            }
          }
          return false;
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

    async getSearchResults(value){
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
        <h2>${this.cardList}</h2>
        <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
        <div class="wrapper">
            <h1>${this.cardList}</h1>
            <div class="item">
                ${this.cards.map((card) => html`
                <dashboard-search image="${card.image}" title="${card.title}" authorTitle="${card.authorTitle}" heading="${card.heading}" iconColor="${card.iconColor}" iconName="${card.iconName}"></dashboard-search>
                `)}
            </div>
        </div>
        `;
    }
}
customElements.define(cardList.tag, cardList);