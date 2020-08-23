import { Component, OnInit } from '@angular/core';
import {MessageService} from '../services/message.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messageSubscription: Subscription;
  message: any[]=[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  getMessage(){

    this.messageSubscription= this.messageService.onMessage().subscribe(
       message=>{
         if(message){
           this.message.push(message)
         }else{
           this.message = [];
         }
       }
    );

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.messageSubscription.unsubscribe()
    
  }

}
