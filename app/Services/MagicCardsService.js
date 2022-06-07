import { ProxyState } from "../AppState.js";
import { MagicCard } from "../Models/MagicCard.js";

//NOTE https://stackoverflow.com/questions/33170235/negative-selection-http-query-string-is-not
// Query string resource for more complex calls if need be



const magicApi = axios.create({
  baseURL: 'https://api.magicthegathering.io/v1',
  timeout: 10000
})

class MagicCardsService {
  async getCard() {
   const res = await magicApi.get('cards?pageSize=20');
   console.log(' heres your magic cards ', res.data);
   ProxyState.cardPool = [...ProxyState.cardPool, ...res.data.cards.map(c => new MagicCard(c))];
  }

  async getRandomCards(num) { // Grabs x random cards and then makes sure there are no repeats. should be called with target number
    const res = await magicApi.get(`cards?pageSize=` + num +`&random=true`);
    console.log(' heres your random magic cards ', res.data);
    ProxyState.cardPool = [...ProxyState.cardPool, ...res.data.cards.map(c => new MagicCard(c))];
    this.noRepeatCards(num)
   }

  noRepeatCards(num) { // Makes sure there are no repeat names in the card pool.
    let names = [];
    ProxyState.cardPool = ProxyState.cardPool.filter((c) => {
      if (c.name != names.find(x => x == c.cardName)) {
        names.push(c.name);
      }
      return c
    })

    // If there aren't the specified amount of cards in the pool, it calls the random function again.
    // this is recursive, but not unbound.

    if (ProxyState.cardPool.length < num) {
      this.getRandomCards(num - ProxyState.cardPool.length)
      console.log('rolling again and adding to pool'); 
    }
    // console.log('PXST pool', ProxyState.cardPool); 
    
  }
}

export const magicCardsService = new MagicCardsService()