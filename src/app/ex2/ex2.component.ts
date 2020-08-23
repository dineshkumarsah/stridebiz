import { Component, OnInit } from '@angular/core';
import  {FormArray,FormControl,FormGroup} from '@angular/forms';
import {GetdataService} from '../services/getdata.service'
import { HttpErrorResponse } from '@angular/common/http';
import {data} from '../model/data';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

 retrivedata:data;
 dataSubscription : Subscription

  constructor(private getdataService:GetdataService ) { }

  ngOnInit(): void {
    this.getData() 
  }
 
  getData(){
    this.dataSubscription=this.getdataService.getBird().subscribe({
      next:(data)=>{
        this.retrivedata = data ;
      },
      error:(eror: HttpErrorResponse)=>{
        console.log(eror);
        
      }
    });
  }
 valueCheck(){
   
 }

 ngOnDestroy(): void {
  this.dataSubscription.unsubscribe();
   
 }
   
     

  
  

}
