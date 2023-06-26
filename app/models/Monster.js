export class Monster {
  constructor (data) {
    this.commonLocations = data.common_locations || []
    this.description = data.description
    this.drops = data.drops || []
    this.id = data.id
    this.imgUrl = data.image
    this.name = data.name
  }

  get CardTemplate() {
    return `
    <div class="col-4">
      <div class="card">
        <img src="${this.imgUrl}" class="card-img-top" alt="monster">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.description}</p>
          <p>Locations</p>
          <ul>
            ${this.ComputeLocationList}
          </ul>
          <p>Drops</p>
          <ul>
            ${this.ComputeDropList}
          </ul>
        </div>
      </div>
    </div>
    `
  }

  get ComputeLocationList() {
    let template = ''
    this.commonLocations.forEach(l => template += `<li>${l}</li>`)
    return template
  }
  get ComputeDropList() {
    let template = ''
    this.drops.forEach(d => template += `<li>${d}</li>`)
    return template
  }

}
// NOTE makes building our class easier by having a reference to what data looks like
// const monsterData = {
//   "category": "monsters",
//   "common_locations": [
//     "Greater Hyrule"
//   ],
//   "description": "A very young Stone Talus. Their bodies toughen as they mature, becoming as tough as boulders by adulthood. As a child, however, their bodies are light enough to be lifted and fragile enough to break when thrown.",
//   "drops": [
//     "flint",
//     "amber",
//     "opal"
//   ],
//   "id": 143,
//   "image": "https://botw-compendium.herokuapp.com/api/v2/entry/stone_pebblit/image",
//   "name": "stone pebblit"
// }