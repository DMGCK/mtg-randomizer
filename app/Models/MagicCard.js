
export class MagicCard {
  constructor(dataObj) {
    this.id = dataObj.id,
    this.cardName = dataObj.name, 
    this.layout = dataObj.layout, // when querying use to not get flip cards and etc
    this.cmc = dataObj.cmc, // NOTE actually CMC
    this.cost = dataObj.manaCost,
    this.colors = dataObj.colors,
    this.types = dataObj.types, //eg creature, artifact
    this.subtypes = dataObj.subtypes, // eg angel, treasure
    this.rarity = dataObj.rarity,
    this.text = dataObj.text,
    this.power = dataObj.power,
    this.toughness = dataObj.toughness,
    this.loyalty = dataObj.loyalty,
    this.gameFormat = dataObj.gameFormat
  }

  get CardTemplate() {
    return `
    <div class="col-4">
    <div class="text-dark m-1 p-2 rounded bg-light shadow">
      <h3 class="m-0 mb-1 text-shadow ">
        <div class="d-flex justify-content-between pr-3">
          <div>${this.cardName}</div>
          <div class="">${this.cost}</div>

        </div>
      </h3>
      <p class="fw-bold">${this.types + '--' + this.subtypes}</p>
      <p>${this.text}</p>
      <div class="text-end p-1 fw-bold">
        ${this.power}/${this.toughness}
      </div>
    </div>
  </div>
    `
  }
}