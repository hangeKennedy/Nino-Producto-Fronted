import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrl: './registrar-producto.component.css'
})
export class RegistrarProductoComponent {
  form!: FormGroup

  constructor(
    private productoService : ServiceService,
    private fb : FormBuilder,
    private router : Router
  ) {}

  ngOnInit(){
    this.form = this.fb.group({
      codigo : [null, [Validators.required]],
      nombre : [null, [Validators.required]],
      marca : [null, [Validators.required]],
      descripcion : [null, [Validators.required]],
      precio : [null, [Validators.required]],
      cantidad : [null, [Validators.required]]
    })
  }

  postProducto() {
    console.log(this.form.value)
    this.productoService.postProducto(this.form.value).subscribe((res) => {
      console.log(res)
      this.router.navigateByUrl("")
    })
  }
}
