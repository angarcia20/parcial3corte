export class Events{
   public  nombre:string;
   public descripcion:string;
   public  fecha:Date;
   public estado:string;

    constructor(nombre:string,descripcion:string,fecha:Date,estado:string){

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.estado = estado;


    }
  }