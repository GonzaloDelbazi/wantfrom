import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../models/producto-response';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  tarjetas = true;
  nombreProd: string;
  productos: Producto[] = [];
  error: boolean;
  resultados: number;
  encontrado: boolean;
  productosB: Producto[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _productoService: ProductoService) { }

  ngOnInit(): void {

    this._productoService.getProductos().subscribe(resp => {

      this.productos = resp;
    });
    this.route.params.subscribe(param => {
      this.nombreProd = param.id;
      console.log(this.nombreProd);
      this.search(this.nombreProd);
    });
    }

  search(nombre: string) {

    let nombreRe = new RegExp(nombre, 'i');
    if (nombre.length === 0) {

      return;

    }else{
      this._productoService.getProductos().subscribe(resp => {
        this.productos = resp;
      });
      if (!this.productos) {

        return this.error = true;
      }else{

        this.productosB = [];
        this.productos.find(producto => {
          let nameProd = producto.nombre.search(nombreRe);

          if (nameProd !== -1) {

            this.productosB.push(producto);
          }
        });
        if (this.productosB.length === 0) {

          this.encontrado = false;
          this.resultados = 0;

        }else{

          console.log(this.productosB);
          this.encontrado = true;
          this.resultados = this.productosB.length;
        }
      }
    }
  }

      navegarProducto(id: string) {
        this.router.navigate(['/producto', id]);
      }


}
