import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit {
	nombrePrueba:string;

  constructor(private fb: FormBuilder) { }

  

  pacienteForm = this.fb.group({

   		nombrehosp: [" ",Validators.required ],
    	callehosp: [ '' ],
		numerohosp: [ '' ],
		
    	nombre: [ '', Validators.required ],
		apellido: [ '' ],
		edad: [ '' ],
		direccion: this.fb.group({
			calle: [ '' ],
			numero: [ '' ]
		}),
		telefonos: this.fb.array([ this.fb.control('') ])
	});

	get telefonos() {
		return this.pacienteForm.get('telefonos') as FormArray;
	}

	agregarTelefono() {
		this.telefonos.push(this.fb.control(''));
	}

	submit() {
		this.pacienteForm.value();

		this.pacienteForm.setValue({
			nombre: 'Maxi',
			apellido: 'Ranquileo',
			edad: 30,
			direccion: {
				calle: 'Godoy'
			},
			telefonos: [ '' ]
		});

		this.pacienteForm.patchValue({ edad: 60 });
	}

  
  ngOnInit(): void {
  }

}
