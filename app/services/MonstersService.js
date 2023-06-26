import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";
import { zeldaApi } from "./AxiosService.js"

class MonstersService {
  // NOTE make this method async so that we can use await within it
  async getMonsters() {
    // NOTE the hard way
    // const response = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
    // console.log('here is the response', response);
    // const jsonData = await response.json()
    // console.log('here is the json', jsonData);

    // NOTE make sure to await our Promise to be resolved
    // zeldaApi is our axios instance that was created in our Axios service
    // NOTE .get() is the method that we call from our axios instance to get data from an API. We'll give over more HTTP methods tomorrow
    // NOTE the first argument that we pass to axios is a string that will be concatted to the end of our baseURL that we set up in our axios instance
    const response = await zeldaApi.get('category/monsters')

    // NOTE axios always returns the part of the request that we care about under the data key
    // REVIEW ALWAYS log your response.data AND look at it in your console. Every API is different
    console.log('got monsters', response.data);


    // NOTE response.data.data is where our array of monsters is stored within the response object. Every API is different, so you'll have to look through your response objects to pull out the data that you actually want
    console.log('our array of monsters', response.data.data);

    // NOTE map will turn our array of pojos into an array or our monster class model
    // REVIEW https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const arrayOfMonsters = response.data.data.map(monsterPojo => new Monster(monsterPojo))

    console.log(arrayOfMonsters);

    AppState.monsters = arrayOfMonsters
  }

}

export const monstersService = new MonstersService()