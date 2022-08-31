import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  language: string = ''; 
  listOfLanguages: string[] = ["English", "Hindi", "Spanish"]; 

  addLanguage(){
    this.listOfLanguages.push(this.language); 

    console.log(this.listOfLanguages); 
  }
}
