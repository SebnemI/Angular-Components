import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.css']
})
export class SendSmsComponent implements OnInit {

  public message:string = '';
  public maxChar:number = 200;

  constructor() { }

  ngOnInit(): void {
  }

}
