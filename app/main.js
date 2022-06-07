import { MagicCardsController } from "./Controllers/MagicCardsController.js"
import { RandomCardsController } from "./Controllers/RandomCardsController.js"
class App {
  // valuesController = new ValuesController();
  magicCardsController = new MagicCardsController();
  randomCardsController = new RandomCardsController();
}

window["app"] = new App();
