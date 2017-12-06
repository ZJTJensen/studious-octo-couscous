import { Component, Input } from '@angular/core';
import { Type } from './type'

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})

 
export class SubComponent{

  @Input() myStats: Type[];
  constructor() { }



}
