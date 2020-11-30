import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-advertisement-form',
  templateUrl: './advertisement-form.component.html',
  styleUrls: ['./advertisement-form.component.css']
})
export class AdvertisementFormComponent implements OnInit {
  
  constructor(private ad:CommonService) { }

  ngOnInit(): void {
  }
topics=['Furniture' , 'Hardware' , 'Mobile'];
userModel = new User('Ben','','');

onSubmit(){
   //console.log(this.userModel);
   this.ad.addAd(this.userModel).subscribe((result)=>{
   console.log("get data", result );
   
   })
  
}
 


}

export class User{
  constructor(
    
    public name: string,
    public category: string,
    public description: string
  ){}
}
