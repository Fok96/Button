import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public task: string = "";
  public list: string[] = [
    "Learn Html",
    "Learn Css",
    "Learn javascript",
    "Learn Typescript",
    "Learn Angular Framework",
    "Learn Boostrap Framework",
    "Learn ExpressJs Framework",
    "Learn mongoDb",
    "Learn Firebase",
    "Learn docker"
  ];

  constructor() { }

  ngOnInit() {
  }

  public addToList() {
    if (this.task && !this.list.includes(this.task)){
      this.list.push(this.task);
      this.task="";
      

    }
  
    
    

  }
  public removeFromList(a){
      this.list.splice(a,1);
  }
  public deleteAll() {
    this.list=[ ]
    
  }

}
