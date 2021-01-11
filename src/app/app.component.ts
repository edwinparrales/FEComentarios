import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FEComentarios';
  items = Array<string>();
  
  constructor() {
    this.items.push("Edwin");
    this.items.push("Patricia");

   }
}
