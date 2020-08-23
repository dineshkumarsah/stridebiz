import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import {data} from '../model/data'
import { count } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }

  getBird():Observable<data>{
    return this.http.get<data>('./assets/bird.json');
  }

  observableCreate(data:any){
    return Observable.create(
      (subscribe)=>{
         try{
          subscribe.next(data);
          subscribe.next('testing observable');
          subscribe.complete();
          

         }catch(e){
           subscribe.error(e);
           
         }
        
      }
    )
    // observer.subscribe(x=>console.log(x))
  }

  
/**
 * of , count operator use 
 */

 ofCountOperator(){
  
   let all_number = of(1,2,3,4);
  let totalnumber= all_number.pipe(count());
  return totalnumber;
 }
 
}
