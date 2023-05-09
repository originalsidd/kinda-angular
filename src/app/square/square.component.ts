import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-square',
  template: `
      <button *ngIf="!value">{{ value }}</button>
      <button style="background-color: #ee3333d0;" *ngIf="value == 'X'">{{ value }}</button>
      <button style="background-color: #33ee33d0;" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; color: #fff;}']
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
