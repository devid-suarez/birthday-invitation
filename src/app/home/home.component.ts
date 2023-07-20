import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  isCorrectAnswer: boolean = false;
  incorrectAnswer: boolean = false;
  days: number = 0;
  message:string = `En los senderos de la vida he andado, <br>
  cosechando momentos, experiencias de lado a lado.<br>
  Personas amadas, almas que me han acompañado,<br>
  en mi camino, siempre, tu amor ha brillado.<br><br>
  
  Un secreto guardo en mis labios sellado,<br>
  una expresión de gratitud, un tesoro ocultado.<br>
  En momentos de gozo y en días nublados,<br>
  esta frase se alza como un canto entonado.<br><br>
  
  Es un tributo sincero, un agradecimiento profundo,<br>
  un reconocimiento que en palabras se difunde.<br>
  Cada instante compartido, cada momento vivido,<br>
  gracias por tanto, por las heridas que has removido.<br><br>
  
  Enigmas te invito a resolver, con cariño te reto,<br>
  ¿Cuál es la frase que, con amor, agradezco en secreto?`;

  isDiscover: boolean = false;
  targetDate: Date = new Date('2023-07-15 17:00:00');
  inputText: string = '';
  
  validateText() {
    const lowercaseInput = this.inputText.toLowerCase().trim();
    const validText = 'gracias por todo';
console.log(123)
    if (lowercaseInput === validText) {
      this.message = "mercredi 26 juil." ;
      this.isCorrectAnswer= true;
    } else {
      this.incorrectAnswer = true;
    }
  }

  onInputChange() {
    this.incorrectAnswer = false;
  }

}
