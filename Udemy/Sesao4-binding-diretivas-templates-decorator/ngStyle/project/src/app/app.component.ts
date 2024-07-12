import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';

  fontSize:number = 15;
  textColor:  'white'|'orange' = 'orange';
  buttonText: 'branco'|'laranja' = 'laranja';

  increaseFontSize(){
    this.fontSize +=5;
  }

  toggleFontColor(){
    if(this.textColor === 'white'){
      this.textColor = 'orange';
      this.buttonText = 'branco';
    }else{
      this.textColor = 'white';
      this.buttonText = 'laranja';
    }
  }

}
