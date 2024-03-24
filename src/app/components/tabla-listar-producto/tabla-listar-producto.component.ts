import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-tabla-listar-producto',
  templateUrl: './tabla-listar-producto.component.html',
  styleUrl: './tabla-listar-producto.component.css'
})
export class TablaListarProductoComponent {
  //Creamos un array
  productos : any = []

  //Inyectamos dependencias 
  constructor(
    private productoService : ServiceService
  ){}

  //Agregamos el metodo esto se iniciaria siempre
  ngOnInit() {
    this.getAllProductos()
  }

  /*METODOS*/

  //GET-ALL
  getAllProductos() {
    this.productoService.getAllProductos().subscribe((res) => {
      console.log(res)
      this.productos = res
    })
  }
  //DELETE
  deleteProducto(id : number) {
    this.productoService.deleteProducto(id).subscribe((res) => {
      console.log(res)
      this.getAllProductos()
    })
  }
}
