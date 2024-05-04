import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() fashion: string = '';
  @Input() logo: string = '';
  @Input()
  operation!: 'addition' | 'minus' | 'divide' | 'multiply';

  @Output() operate = new EventEmitter<
    'addition' | 'minus' | 'divide' | 'multiply'
  >();

  onButtonClick(): void {
    this.operate.emit(this.operation);
  }
}
