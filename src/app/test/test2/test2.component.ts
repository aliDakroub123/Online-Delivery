import { Items } from './../../models/items.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})


export class Test2Component implements OnInit {
  @Input() items:any;
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
