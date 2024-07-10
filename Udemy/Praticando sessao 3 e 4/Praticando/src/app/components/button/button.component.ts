import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html', 
  styleUrl: './button.component.scss' 
})
export class ButtonComponent {
  @Input({required:true,alias:'text'}) 
  buttonText:string = '';
  @Input({required:true,alias:'style'}) 
  buttonStyle: 'white'|'purple' = 'white';

  @Output('clicked') buttonClickedEmitt = new EventEmitter<void>();
  onButtonClicked(){
    this.buttonClickedEmitt.emit();
  }
}
