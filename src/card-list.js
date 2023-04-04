import { LitElement, html, css } from 'lit';
import "./dashboard-search.js";

export class cardList extends LitElement {
    static get tag() { return 'card-list'; }

    static get properties () {
        return {
          cards: {type: Array},
          cardList: {type: String},
          userInput: {type: String}
      } 
}

    constructor(){
        super();
        this.cards = [];
        this.cardList = 'Badge Card List';
        this.updateList();
        this.userInput = document.querySelector("search").addEventListener(enter)
    }

    
    updateList(){
        console.log("test");
        const address = new URL('../assets/list.json',import.meta.url).href;
        const data = fetch(address).then((response) => {
            if(response.ok){
                return response.json()
            }
            return[];
        })
        .then((data) =>{
            this.cards = data;
        });
    }

    searchList(){
        for(var i = 0; i < cardList.length; i++){
            if(userInput === cardList[i]){
                document.querySelector(this.userInput)
            }else{
                return -1; 
            }
        }
        
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


    render(){
        return html`
        <h2>${this.cardList}</h2>
        <div class="wrapper">
            <h1>${this.cardList}</h1>
            <div class="item">
                ${this.cards.map((card) => html`
                <dashboard-search image="${card.image}" title="${card.title}" subTitle="${card.subTitle}" memeTopText="${card.memeTopText}" memeBottomText="${card.memeBottomText}"></logo-card2>
                `)}
            </div>
        </div>
        `;
    }
}
customElements.define(cardList.tag, cardList);