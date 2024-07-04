import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = "Texto Inicial";
  inputType = "text";
  isDisabled = false;

  enableInput(){this.isDisabled = false;}
  disabledInput(){ this.isDisabled = true;}
  setTypeSenha(){this.inputType = "password";}
  setTypeText(){this.inputType ="text";}
  logInputText(){console.log(this.inputText)}
  handleInputKeyup(event: KeyboardEvent){
    const currentText = (event.target as HTMLInputElement).value
    console.log(currentText)
  }
  buttonTitle = 'titulo do botão';
  buttonDisable = true;
  widthButton1 = '110px';
  backgroundColorBtn1 = "red";
  estilosBotaoTeste ={
    width : '110px',
    backgroundColor : "green"
  }

}
