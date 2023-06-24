import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  incorrectAnswer: boolean = false;
  days: number = 0;
  message:string = `En tierras lejanas, sueños dorados,<br>
  Una dama sublime, París en sus manos.<br>
  Maestra de inglés, su esencia divina,<br>
  Conquistó mi ser, mi musa parisina.<br>
  <br>
  En la clase de idiomas, un reto dejó,<br>
  Aprender una canción que al corazón llegó.<br>
  Melodía envolvente, un himno al compás,<br>
  Despertando anhelos en cada compás.<br>
  <br>
  Sus ojos reflejaban luces en el Sena,<br>
  Susurros de enseñanza, magia plena.<br>
  París, su pasión, su inspiración sin par,<br>
  En cada rincón, su esencia a brillar.<br>
  <br>
  Enigmas que guarda, el firmamento estelar,<br>
  Misterios del cosmos, esperan desvelar.<br>
  Dime, dama espléndida, sin igual,<br>
  ¿Qué secreto ocultan las estrellas en su palmar?`;

  isDiscover: boolean = false;
  targetDate: Date = new Date('2023-07-15 17:00:00');
  inputText: string = '';
  



  validateText() {
    const lowercaseInput = this.inputText.toLowerCase().trim();
    const validText = 'counting stars';

    if (lowercaseInput === validText) {
      this.message = "Felicidades amore mío!!!, esta es tu siguiente pista: Atelier" ;
    } else {
      this.incorrectAnswer = true;
    }
  }

  onInputChange() {
    this.incorrectAnswer = false;
  }

}
