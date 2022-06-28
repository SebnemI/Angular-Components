import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public tourName: string = "Paris";
  public tourImage:string = "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  public time:string =new Date().toLocaleTimeString();

  constructor() {
    this.updateTime();
   }

  ngOnInit(): void {
  }

  public getDate():string {
    return new Date().toLocaleDateString();
  }

  public updateTime():string{
    setInterval(()=>{
      this.time = new Date().toLocaleTimeString();
      
    },1000); 
    return this.time;  
  }
}
