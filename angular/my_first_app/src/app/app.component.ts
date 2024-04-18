import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username = "Steven";
  message = '';

  onSubmit(event: Event):void {
    this.message = " Thank you";
    console.log(event);
  }
}
