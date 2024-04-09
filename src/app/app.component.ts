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
      transition('normal <=> highlighted', animate(300)),
    ]),

    trigger('divShrink', [
      state(
        'normal',
        style({ backgroundColor: 'red', transform: 'translateX(0)' })
      ),
      state(
        'highlighted',
        style({ backgroundColor: 'blue', transform: 'translateX(100px)' })
      ),
      state(
        'shrink',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px) scale(0.5)',
        })
      ),
      transition('normal <=> highlighted', animate(300)),
      transition('shrink <=> *', animate(300)),
    ]),
  ],
})
export class AppComponent {
  state = 'normal';
  shrinkState = 'normal';
  title = 'ng-animation';

  onAnimate() {
    this.state == 'normal'
      ? (this.state = 'highlighted')
      : (this.state = 'normal');

    this.shrinkState == 'normal'
      ? (this.shrinkState = 'highlighted')
      : (this.shrinkState = 'normal');
  }

  onShrink() {
    this.shrinkState = 'shrink';
  }
}
