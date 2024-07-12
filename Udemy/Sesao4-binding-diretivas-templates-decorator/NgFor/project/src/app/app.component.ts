import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonComponent } from './person/person.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, PersonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
  personSelectIndex:number|undefined;
  listPeople = [

    {name : 'Felipe Freitas', age:26},
    {name : 'Fulano da silva', age:34},
    {name : 'Jorginho Carvalho', age:55},
    {name : 'Joãozinho da Silva', age:18},

  ];

  selectPerson(index:number){
    this.personSelectIndex = index;
  }


}
