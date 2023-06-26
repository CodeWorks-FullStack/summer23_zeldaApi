
// NOTE this creates an axios instance to run our HTTP requests for us

// @ts-ignore
export const zeldaApi = axios.create({
  // NOTE this will be the base url for all requests made with this instance of axios. Other things can be concatted to the end when we actually call methods from this instance in the service layer
  baseURL: 'https://botw-compendium.herokuapp.com/api/v2',

  // NOTE how long we will wait for an API to respond before throwing an error
  timeout: 8000
})