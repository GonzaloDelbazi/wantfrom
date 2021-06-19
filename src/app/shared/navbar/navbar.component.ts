import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../../models/categorias-response';
import { ProductoService } from '../../services/producto.service';
import { SearchService } from '../../services/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombreProd: string;
  categorias: Categoria[] = [];

  constructor(private _searchService: SearchService,
              private _productoService: ProductoService,
              private router: Router) {
  }

  ngOnInit(): void {

    this._productoService.getCategorias().subscribe(resp => {

      this.categorias = resp;
      console.log(this.categorias);
    });
  }

  buscar() {

    const nombreProd = (document.getElementById('busqueda') as HTMLFormElement).value;
    this.router.navigate(['/productos', nombreProd]);


  }

}
