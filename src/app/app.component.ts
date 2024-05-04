import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Investigacion210';
  number1: number = 0;
  number2: number = 0;
  resultado: number = 0;

  sumUp() {
    this.resultado = this.number1 + this.number2;
  }

  minusDown() {
    this.resultado = this.number1 - this.number2;
  }

  Multiply() {
    this.resultado = this.number1 * this.number2;
  }

  Divide() {
    this.resultado = this.number1 / this.number2;
  }
}
