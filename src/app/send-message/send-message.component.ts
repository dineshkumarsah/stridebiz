import { Component, OnInit } from '@angular/core';
import {MessageService} from '../services/message.service';
import { Subscription } from 'rxjs';
import {FormControl,FormArray,FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  _subscription: Subscription;
  messageSend: FormGroup;

  constructor(private messageService: MessageService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this. createForm();
  }


  sendMessage(){
    console.log(this.messageSend);
    this.messageService.sendMessage('dinesh');
  }
  clearMessage(){
    this.messageService.clearMessage();
  }

  createForm(){
   this.messageSend = this.formBuilder.group({
     message:''
   })
  }

}
