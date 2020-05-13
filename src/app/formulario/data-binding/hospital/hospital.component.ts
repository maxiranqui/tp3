import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  hospitalPadre: string = 'Hospital Heller';
  otroHospitalPadre: string;

  constructor() { }

  ngOnInit(): void {
  }
  onCambioHospital(hospitalNuevo){
    this.otroHospitalPadre = hospitalNuevo;
  }

}
