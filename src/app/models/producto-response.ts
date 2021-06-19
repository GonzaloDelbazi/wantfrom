export interface ProductoResponse {
    productos: Producto[];
}

export interface Producto {
    id:                     number;
    nombre:                 string;
    descripcion:            string;
    precio:                 number;
    promocion:              null;
    disponibilidadGeneral:  number;
    fechaCreacion:          number | null;
    foto:                   null;
    imagenes:               any[];
    activo:                 boolean;
    destacado:              boolean;
    subcategoria:           Subcategoria;
    marca:                  Marca;
    unidadMedida:           UnidadMedida;
    propiedades:            Propiedade[];
    caracteristicas:        any[];
    defaultSku:             DefaultSku;
    skus:                   DefaultSku[];
    vendibleSinPropiedades: boolean;
}

export interface DefaultSku {
    id:             number;
    nombre:         string;
    descripcion:    string;
    precio:         number;
    activo:         boolean;
    disponibilidad: number;
    promocion:      null;
    fechaCreacion:  number | null;
    foto:           null;
    valoresData:    null | string;
    valores:        Valore[];
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

export interface Marca {
    id:     number;
    nombre: string;
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

export interface Subcategoria {
    id:          number;
    nombre:      string;
    codigo:      string;
    foto:        null;
    propiedades: Propiedade[];
}

export interface UnidadMedida {
    id:     number;
    nombre: string;
    codigo: string;
}
