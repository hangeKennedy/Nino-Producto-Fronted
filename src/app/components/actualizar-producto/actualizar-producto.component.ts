import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {
  form !: FormGroup

  id : number = this.activatedRoute.snapshot.params["id"]

  constructor(
    private activatedRoute : ActivatedRoute,
    private service : ServiceService,
    private fb : FormBuilder,
    private router : Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      codigo : [null, [Validators.required]],
      nombre : [null, [Validators.required]],
      marca : [null, [Validators.required]],
      descripcion : [null, [Validators.required]],
      precio : [null, [Validators.required]],
      cantidad : [null, [Validators.required]]
    })

    this.getProductoById()
  } 
  
  //GET-BY-ID
  getProductoById() {
    this.service.getByIdProducto(this.id).subscribe((res) => {
      console.log(res)

      this.form.patchValue(res)
    })
  }

  //PUT
  putProducto() {
    this.service.putProducto(this.id, this.form.value).subscribe((res) => {
      console.log(res)

      if (res.id != null) {
        this.router.navigateByUrl("")
      }
    })
  }
}
