import { Component } from '@angular/core';
import {lorem} from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  success = false ;
  randomText = lorem.sentence();
  textEntered ='';

  onInput(value: string){
    this.textEntered = value;
    if (this.randomText === this.textEntered){
      this.success = true;
    }else{
      this.success = false;
    }

  }
  compare(randomLetter : string, enteredLetter : string ){
   if(!enteredLetter){
     return 'pending';
   }
   return randomLetter === enteredLetter ?'correct' :'incorrect';
  }
}
