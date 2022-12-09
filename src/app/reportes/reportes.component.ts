import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  constructor() { }
  valores:Date[] =[];
  
  ngOnInit(): void {
    for (let index = 1; index < 30; index++) {
      this.valores.push(new Date('8/'+index+'/2022'))
      
    }
    
    
  }
}
