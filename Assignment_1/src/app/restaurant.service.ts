import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  myArr:string[] = ["Bar & grills","Social","Navratna", "Irani", "Madras Cafe"];

  public getList(){
    return this.myArr;
  }
}
