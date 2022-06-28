import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  public message:string = 'Hello';
  constructor() { }

  ngOnInit(): void {
  }

  public updateMessage(message:string):void {
    this.message = message;
  }


}
