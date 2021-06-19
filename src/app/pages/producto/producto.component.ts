import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto-response';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  id: number;
  producto: Producto;

  constructor(private route: ActivatedRoute,
              private _productoService: ProductoService) {
}

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.id = params.id;
      console.log(this.id);
    });

    this._productoService.getProductos().subscribe(resp => {

      resp.forEach(producto => {

        console.log(producto.id);
        if (producto.id == this.id) {

          return this.producto = producto;
        }
      });
      console.log(this.producto);
    });
  }

}
