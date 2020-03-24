import {Request} from "./Request";
import { config } from "./config";

export const ApiRequest = class ApiRequest {
  constructor(){}

  static async post(route, params){
    console.log('route',route)
    console.log('params',params)
    
    console.log('pro',process)

    return await Request.fetch(config.apiUrl + route + params, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).catch(err=>console.log('ERROR POST',err));
  }
  static async put(route, params){
    return await Request.fetch(process.env.API_URL  + route, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(params)
    });
  }
  static async get(route) {
    return await Request.fetch(process.env.API_URL + route, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
       
      },
    });
  }
};