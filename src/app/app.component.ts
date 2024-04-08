import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('divAnim', [
      state(
        'normal',
        style({ backgroundColor: 'red', transform: 'translateX(0)' })
      ),
      state(
        'highlighted',
        style({ backgroundColor: 'blue', transform: 'translateX(100px)' })
      ),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(300)),
    ]),
  ],
})
export class AppComponent {
  state = 'normal';
  title = 'ng-animation';

  onAnimate() {
    this.state == 'normal'
      ? (this.state = 'highlighted')
      : (this.state = 'normal');
  }
}
