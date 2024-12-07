import { Component } from '@angular/core';
import { ParentComponent } from "./communication/input-output/parent/parent.component";

@Component({
  selector: 'app-root',
  imports: [
    ParentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularPractice';
}
