import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'strideBiz';
  totalpay:number
  constructor(){}

ngOnInit(): void {
  this. sumOfSalaries();
  console.log('dkkkk',this.sumOfObject());
  console.log('flattenArray()',this.flattenArray());
  this.stringCount();
  this.stringCount2();
  this.stringCount3();
  

  }

  sumOfSalaries(){
    let salaries = {
      dinesh:'25000',
      ramesh:'50000'
    }
   let sum = 0
   for(let value of Object.values( salaries)){
    sum = sum+ +value;
   } 
   this.totalpay=sum
  }

  sumOfObject(){
    let arr1 : Array<number>=[1,3,4]
    let sal = {
      'dinesh': 2000,
      'ashok': 3000,
      'ashok1': 3000,
    }
    if(!sal){
      return Object.values(sal).reduce((a,b)=>a+b,100)
    }
    else{
      console.log(this.arraySum(arr1));
      return Object.keys(sal).length;
     
    }
    
  }

  arraySum(array: Array<number>){
   return array.reduce((a,b)=>a+b,0);
  }

  flattenArray(){
    let flattenedArray = [[1,2],[3,4],[5,6]];
    return flattenedArray.reduce((a,b)=>a.concat(b))
  }

  stringCount() {
    debugger;
    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
    let countedNames = names.reduce(function (allNames, name) { 
    if(name in allNames) {
      allNames[name]++
     }
    else {
     allNames[name] = 1
    }
  return allNames
 }, {})
  console.log('count',countedNames);
  
  }
  stringCount2(){
    let name=['dinesh','sunil','sunil','shakti','nanak','dinesh'];
    let countName = name.reduce(
      (all,name) =>{
        if(name in all){
          all[name]++
        }
        else{
          all[name]=1
        }
        return all
      } , {})
      console.log('cont2',countName);
      
  }

  stringCount3(){
    let arr=[0,0,0,0,1,1,1,1,1];
    let nameCount = arr.reduce((allName,name)=>{
      if(name in allName){
        allName[name]++
      }
      else{
        allName[name]=1
      }
      return allName
    },{})
    console.log('cont3',nameCount);
    
  }
}
