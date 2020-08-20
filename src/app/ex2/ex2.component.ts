import { Component, OnInit } from '@angular/core';
import  {FormArray,FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let age='age'
    console.log(this.groupingObject(age));
    
  }

  groupingObject(proprty){
    let people = [
      {'name':'dinesh','age':'27'},
      {'name':'kundan','age':'25'},
      {'name':'kumar','age':'20'},
      {'name':'shakti','age':'20'} 
    ]
     return people.reduce(
       (acc,obj)=>{
         let key = obj[proprty];
         if(!acc[key]){
           acc[key] = [];
         }
         acc[key].push(obj);
         return acc
       },{}
     ) 
    
  }
  

}
