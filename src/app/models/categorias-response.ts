export interface CategoriasResponse {
    categorias: Categoria[];
}

export interface Categoria {
    id:            number;
    nombre:        string;
    foto:          null;
    subcategorias: Subcategoria[];
}

export interface Subcategoria {
    id:          number;
    nombre:      string;
    codigo:      string;
    foto:        null;
    propiedades: Propiedade[];
}

export interface Propiedade {
    id:       number;
    nombre:   Nombre;
    variable: boolean;
    valores:  Valore[];
}

export enum Nombre {
    Color = "Color",
    Talle = "Talle",
}

export interface Valore {
    id:    number;
    valor: Valor;
}

export enum Valor {
    Amarillo = "Amarillo",
    Blanco = "Blanco",
    Gris = "Gris",
    Negro = "Negro",
    Rojo = "Rojo",
    The36Eu = "36 EU",
    The37Eu = "37 EU",
    The38Eu = "38 EU",
    The39Eu = "39 EU",
}
