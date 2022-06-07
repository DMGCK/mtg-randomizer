import { ProxyState } from "../AppState.js";
import { MagicCard } from "../Models/MagicCard.js";

class RandomCardsService {
  async generateCard(type, rarity){
    console.log('made it to service', type, rarity); 
    let typedAndShuffled = ProxyState.cardPool.sort(() => 0.5 - Math.random()); // shuffle order
    typedAndShuffled = typedAndShuffled.filter(c => c.types == type && c.rarity == rarity) // types is the name of the property, can be plural
    let attrPool = typedAndShuffled.slice(0,6)

    console.log(attrPool); 

    let dataObj = {
    id: Date.now,
    layout: 'normal', 
    cardName: attrPool[0].cardName, 
    colors: attrPool[0].colors,
    rarity: attrPool[0].rarity,
    cmc: attrPool[1].cmc, 
    cost: attrPool[1].cost,
    types: attrPool[2].types,
    subtypes: attrPool[2].subtypes, 
    text: attrPool[3].text + ' ' + attrPool[4].text,
    power: attrPool[5].power,
    toughness: attrPool[5].toughness,
    // loyalty: attrPool[6].loyalty || '0',
    gameFormat: attrPool[0].gameFormat
    }
    
    console.log(dataObj); 
    
    ProxyState.randomCardPool = [...ProxyState.randomCardPool, new MagicCard(dataObj)]
    
  }
}

export const randomCardsService = new RandomCardsService()