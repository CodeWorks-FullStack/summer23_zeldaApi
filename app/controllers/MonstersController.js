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

    // NOTE we can't run the draw on page load because there is no data in our AppState until our request to the api is done
    // _drawMonsters()

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

    // NOTE try/catch will TRY to run all of the code inside our try block, and if an error is THROWN, we capture that error, stop running the code inside of the try, and run the code inside of the catch instead
    try {
      // NOTE we await here as well so that our Controller waits for the code to run inside of getMonsters from the monstersService before popping our success, and if an error is thrown inside of the service, it still triggers our catch
      await monstersService.getMonsters()
      Pop.success('We got the monsters!')
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}