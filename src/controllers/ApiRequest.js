import {Request} from "./Request";

//export const API_URL="https://sfly.herokuapp.com";
export const API_URL="http://localhost:8080";

export const ApiRequest = class ApiRequest {

  static async post(route, params){
    return await Request.fetch(API_URL + '/' + route + '?email=' + params, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
  static async put(route, params){
    return await Request.fetch(API_URL + '/' + route, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    });
  }
  static async get(route) {
    return await Request.fetch(API_URL  + route, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
};
