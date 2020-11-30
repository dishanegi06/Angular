import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL ="http://localhost:3000/Ad";
  constructor(private _http:HttpClient) { }
    getAdList(){
      return this._http.get(this.URL);
       
   }
   addAd(data:any){
     return this._http.post(this.URL , data);
   }
   deleteAd(id:any){
     return this._http.delete(`${this.URL}/${id}`)
   }
   getCurrentData(id:any){
    return this._http.get(`${this.URL}/${id}`)
   }
   updateAd(id:any,data:any){
    return this._http.put(`${this.URL}/${id}`,data)
   }
}