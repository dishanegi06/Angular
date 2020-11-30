import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  constructor(private ad:CommonService, private router:ActivatedRoute ) { }


  ngOnInit(): void {
    this.ad.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result);
      
    });
  }
    updateA(){
      this.ad.updateAd(this.router.snapshot.params.id, this.userModel).subscribe((result)=>{
        console.log(result);
        
      })

    }
  
  topics=['Furniture' , 'Hardware' , 'Mobile'];
  userModel = new User('Ben','','');
  
  
 
 
 }
 
 export class User{
   constructor(
     
     public name: string,
     public category: string,
     public description: string
   ){}
 }
 
