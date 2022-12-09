import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  constructor() { }
  valores:Number[] =[];
  precio = 134.56
  total=0
  ngOnInit(): void {
    for (let index = 1; index < 100; index++) {
      this.valores.push(index)
      
    }
    this.total = this.precio*this.valores.length
    
  }

}
