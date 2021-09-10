import { Component } from "@angular/core";
import { StringifyOptions } from "querystring";

interface IRegisterForm {
  rut:  string;
  name: string;
  apellido: string;
  direccion: string;
  ciudad: string;
  telefono: string;
  email: string;
  fnaciemiento: String;
  estadoCivil: string;
  comentarios: string;
}

@Component({
  selector: "app-template-forms",
  templateUrl: "./template-forms.component.html",
  styleUrls: ["./template-forms.component.css"]
})
export class TemplateFormsComponent {
  cerrarVista = false;
  register: IRegisterForm = {
    rut: "",
    name: "",
    apellido: "",
    direccion: "",
    ciudad: "",
    telefono: "",
    email: "",
    fnaciemiento: null,
    estadoCivil: "",
    comentarios: ""
  };
  constructor() {}
  submit() {
    // Llegados a este punto, ya hemos podido validar todo excepto las contraseñas y ya recibimos los datos
    console.log("Datos de inicio de sesión");
    console.log(this.register.name);
    console.log(this.register.email);
    console.log(this.register.estadoCivil);
    console.log(this.register.comentarios);


    // Con estos datos ya todo OK, los enviamos al servidor para comprobar si el login es OK o NO
  }

  limpiar() {
    this.register.rut = "";
    this.register.name= "";
    this.register.apellido= "";
    this.register.direccion= "";
    this.register.ciudad= "";
    this.register.telefono= "";
    this.register.email= "";
    this.register.fnaciemiento= null;
    this.register.estadoCivil= "";
    this.register.comentarios= "";
  }

  cerrar() {
    this.cerrarVista = true;
  }

}
