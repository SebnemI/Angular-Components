import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch-username-auto',
  templateUrl: './ch-username-auto.component.html',
  styleUrls: ['./ch-username-auto.component.css']
})
export class ChUsernameAutoComponent implements OnInit {

  public username:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
