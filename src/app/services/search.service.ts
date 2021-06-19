import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductoResponse, Producto } from '../models/producto-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url: string = 'https://api.qa.deofisdev.online/api/catalogo';
  nombreProd: string;

  constructor(private http: HttpClient) { }

  getProductos(nombreProd): Observable<Producto[]> {

    this.nombreProd = nombreProd;

    return this.http.get<ProductoResponse>(`${this.url}/productos`)
    .pipe(
      map(resp => resp.productos)
    );
   }
}
