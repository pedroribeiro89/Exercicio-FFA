import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filter = '';

  changeFilter(event: KeyboardEvent) {
    this.filter += (event.target as HTMLInputElement).value;
    console.log(this.filter)
  }
}
