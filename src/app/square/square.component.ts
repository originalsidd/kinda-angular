import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-square',
  template: `
      <button mat-raised-button *ngIf="!value">{{ value }}</button>
      <button mat-raised-button color="red">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
