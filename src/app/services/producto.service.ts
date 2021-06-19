import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Categoria, CategoriasResponse } from '../models/categorias-response';
import { ProductoResponse, Producto } from '../models/producto-response';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url: string = 'https://api.qa.deofisdev.online/api/catalogo';
  constructor(private http: HttpClient) { }


  getCategorias(): Observable<Categoria[]>{

    return this.http.get<CategoriasResponse>(`${this.url}/categorias`)
    .pipe(
      map(resp => resp.categorias)
    )
  }

  getProductos(): Observable<Producto[]> {

    return this.http.get<ProductoResponse>(`${this.url}/productos`)
    .pipe(
      map(resp => resp.productos),
      catchError(err => of(null))
    );
   }

}
