import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Categoria } from '../../models/categorias-response';
import { Producto } from '../../models/producto-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tarjetas = true;
  categorias: Categoria[];
  productos: Producto[];

  constructor(private _productoService: ProductoService) {

    this._productoService.getCategorias().subscribe(resp => {

      this.categorias = resp;
      console.log(this.categorias);
    });
    this._productoService.getProductos().subscribe(resp => {
      console.log(resp);
      this.productos = resp;
    });
  }

  ngOnInit(): void {
  }

}
