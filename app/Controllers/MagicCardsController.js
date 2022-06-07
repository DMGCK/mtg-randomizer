import { Pop } from "../Utils/Pop.js"
import { magicCardsService } from "../Services/MagicCardsService.js";

export class MagicCardsController {
  constructor() {
    console.log('constructor is working!'); 
    this.getRandomCards(100)
  }

  async getCard() {
   try {
     await magicCardsService.getCard() 
   } catch (error) {
   Pop.toast(error, 'error')
   console.error(error);
   }
  }

  async getRandomCards(num) {
   try {
     await magicCardsService.getRandomCards(num) 
   } catch (error) {
   Pop.toast(error, 'error')
   console.error(error);
   }
  }
}