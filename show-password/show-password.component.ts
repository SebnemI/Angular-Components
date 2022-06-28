import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css']
})
export class ShowPasswordComponent implements OnInit {

  public inputType:string = 'password';

  public showPassword(event:any):void{
    event.target.checked ? this.inputType = 'text' : this.inputType = 'password';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
