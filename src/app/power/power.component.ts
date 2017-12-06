import { Component, OnInit } from '@angular/core';
import { Type } from './sub/type'

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent {
  power= 1;
  stats: Type[]=[
    {
      modifier: 1,
      type:'Human',
      level: 100,
      max:100
    },
   {
    modifier: 10,
     type:'Saiyan',
     level: 1000,
     max:1000
  },
   {
    modifier: 90,
     type:'SuperSaiyan',
     level: 9000,
     max:9000
  },
   {
    modifier: 150,
     type:'SuperSaiyanTwo',
     level: 15000,
     max:15000
  },
   {
    modifier: 250,
     type:'SuperSaiyanThree',
     level: 25000,
     max:25000
  },
   {
    modifier: 500,
     type:'SuperSayianFour',
     level: 50000,
     max:50000
  }
]
  onSubmit(){
    for(let stat of this.stats){

      stat.level=stat.modifier*(stat.max/this.power);

    }
  }

}
