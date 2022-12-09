import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  valor = false
  user = false
  buscar = false
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.valor="true"===this.rutaActiva.snapshot.params['cabeza']
    if (this.user = "1"===this.rutaActiva.snapshot.params['user']) {
      this.user = true
    } else {
      this.buscar = true
    }
  }

}
