import { Component, OnInit } from '@angular/core';
import {Paciente} from 'src/app/formulario/data-binding/clases/Paciente';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  nombrePaciente: string;
  apellido: string = 'Ortigoza';


  imagenPaciente: string = 'https://www.ceroacero.es/img/jogadores/57/407857_ori__20170531082849_nestor_ortigoza.jpg';
  anchoImg= '250';
  altoImg= '350';
  tooltip= 'Orti';


  paciente: Paciente = {
    nombre: 'Nestor',
    apellido:'Ortigoza',
    edad: 33,
    direccion: 'Boedo 123'
  };








  constructor() {
    this.nombrePaciente= 'Nestor Ortigoza';
  }


  verPaciente(paciente : any) {
		alert('Paciente: ' + paciente);
	}


  ngOnInit(): void {
  }

}
