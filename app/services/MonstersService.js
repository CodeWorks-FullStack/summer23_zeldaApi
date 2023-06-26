import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";
import { zeldaApi } from "./AxiosService.js"

class MonstersService {
  async getMonsters() {
    // NOTE the hard way
    // const response = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
    // console.log('here is the response', response);
    // const jsonData = await response.json()
    // console.log('here is the json', jsonData);

    const response = await zeldaApi.get('category/monsters')
    // NOTE axios always returns the part of the request that we care about under the data key
    console.log('got monsters', response.data);

    const arrayOfMonsters = response.data.data.map(monsterPojo => new Monster(monsterPojo))

    console.log(arrayOfMonsters);

    AppState.monsters = arrayOfMonsters
  }

}

export const monstersService = new MonstersService()