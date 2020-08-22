import { Component, OnInit } from '@angular/core';
import  {FormArray,FormControl,FormGroup} from '@angular/forms';
import {GetdataService} from '../services/getdata.service'
import { HttpErrorResponse } from '@angular/common/http';
import {data} from '../model/data'

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

 retrivedata:data;

  constructor(private getdataService:GetdataService ) { }

  ngOnInit(): void {
    this.getData() 
  }
 
  getData(){
    this.getdataService.getBird().subscribe({
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
   
     

  
  

}
