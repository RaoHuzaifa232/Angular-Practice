import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  //Receving data from parent in data
  @Input() data:any;
  // Sending data to parent
  @Output() forParent = new EventEmitter();


  sendingToParent(){
    this.forParent.emit("Hello parents");
  }
}
