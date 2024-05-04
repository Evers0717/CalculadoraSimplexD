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
  @Output() operate = new EventEmitter<''>();

  onButtonClick(): void {
    this.operate.emit();
  }
}
