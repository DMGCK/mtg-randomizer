import { Pop } from "../Utils/Pop.js"
import { randomCardsService } from "../Services/RandomCardsService.js";
import { ProxyState } from "../AppState.js";
import { MagicCard } from "../Models/MagicCard.js";


function _drawRandomCards() {
  let template = '';
  ProxyState.randomCardPool.forEach(c => template += c.CardTemplate);
  document.getElementById('card-display').innerHTML = template;
}

export class RandomCardsController {
  constructor() {
    console.log('randomizer controls working'); 
    ProxyState.on('randomCardPool', _drawRandomCards)
    // this.generateCard() Ran into a race condition, where the api isn't finished getting the cards. NOTE should not run on startup
    
  }

  async generateCard(types = 'Creature', rarity = 'Rare') {
    console.log('generator running', types); 
    
   try {
     await randomCardsService.generateCard(types, rarity) 
   } catch (error) {
   Pop.toast(error, 'error')
   console.error(error);
   }
  }
}