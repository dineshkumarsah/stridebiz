import { Component, OnInit } from '@angular/core';
import {from, Observable, Subscription} from 'rxjs';
import {max} from 'rxjs/operators';
import {GetdataService} from '../services/getdata.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {

  ofSubscriptio:Subscription

  constructor(private getdataService:GetdataService ) { }

  ngOnInit(): void { 
    this.getOfoperator();
    this.getMaxValue();
    this.observableCreate();
    this.getObservableDta();
  }

  getMaxValue(){
    let list = [1,2,3,4,5,6,7,8,9];
    from(list).pipe(max((a,b)=>a+b)).subscribe(x=>console.log(x)
    )
  }

  observableCreate(){
    let observer = Observable.create(
      (subscribe)=>{
         subscribe.next("my first observer");
      }
    )
    observer.subscribe(x=>console.log(x))
  }

  getObservableDta(){

    let data = 20;
    this.getdataService.observableCreate(data).subscribe(x=>{
       console.log(x);
      },
      e=>{console.log(e);
      },
      ()=>{console.log('completion');
      }
    );
  }

  getOfoperator(){
    debugger;
   this.ofSubscriptio=this.getdataService.ofCountOperator().subscribe(
     x=>{console.log("of count ",x);
     }
   );
  }

  ngOnDestroy(): void {
    
    this.ofSubscriptio.unsubscribe();
  }
}
