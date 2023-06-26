import { AppState } from "../AppState.js";
import { monstersService } from "../services/MonstersService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawMonsters() {
  let monsters = AppState.monsters

  let template = ''

  monsters.forEach(m => template += m.CardTemplate)

  setHTML('monsters', template)

}

export class MonstersController {
  constructor () {
    console.log('Monsters COntroller loaded');

    // this.testTryCatch('Jerms')
    this.getMonsters()


    AppState.on('monsters', _drawMonsters)
  }

  // testTryCatch(name) {
  //   try {
  //     if (!name) {
  //       throw new Error("No name supllied")
  //     }
  //     Pop.success(`${name} was supplied`)
  //   } catch (error) {
  //     console.error(error)
  //     Pop.error(error.message)
  //   }
  // }


  async getMonsters() {
    try {
      await monstersService.getMonsters()
      Pop.success('We got the monsters!')
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}