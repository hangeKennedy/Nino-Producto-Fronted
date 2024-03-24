import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//URL principal
const URL_BASIC = ["http://localhost:8080/api"]

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //Inyeccion de dependencias
  constructor(
    private http: HttpClient
  ) { }

  //GET-ALL
  getAllProductos() : Observable<any> {
    return this.http.get(URL_BASIC + "/productos")
  }

  //POST
  postProducto(producto : any) : Observable<any> {
    return this.http.post(URL_BASIC + "/producto", producto)
  }
  //DELETE
  deleteProducto(id : number) : Observable<any> {
    return this.http.delete(URL_BASIC + "/producto/" + id)
  }
  //PUT
  putProducto(id : number, producto : any) : Observable<any> {
    return this.http.put(URL_BASIC + "/producto/" + id, producto)
  }
  //GET-BY-ID
  getByIdProducto(id : number) : Observable<any>{
    return this.http.get(URL_BASIC + "/producto/" + id)
  }
}
