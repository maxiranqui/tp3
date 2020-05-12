import { Component, OnInit } from '@angular/core';
import {Paciente} from 'src/app/formulario/data-binding/clases/Paciente';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  nombrePaciente: string;

  paciente: Paciente = {
    nombre: 'Nestor',
    apellido:'Ortigoza',
    edad: 33,
    direccion: 'Boedo 123'
  };








  constructor() {
    this.nombrePaciente= 'Maxi Ranquileo'
   }

  ngOnInit(): void {
  }

}
