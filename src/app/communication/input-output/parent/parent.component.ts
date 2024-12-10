import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'parent',
  imports: [
    CommonModule,
    FormsModule,
    // Components
    ChildComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  parentData:any;
  parentForChild:any;

  // Receving data from child
  recevingfromChild(event:any) {
    this.parentData = event;
  }
}
