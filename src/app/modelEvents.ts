export class Events{
    nombre:string;
    descripcion:string;
    fecha:Date;
    estado:string;

    constructor(nombre:string,descripcion:string,fecha:Date,estado:string){

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.estado = estado;


    }
  }