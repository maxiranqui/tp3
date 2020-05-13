import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludComponent } from './formulario/salud/salud.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PacienteComponent } from './formulario/data-binding/paciente/paciente.component';
import { HospitalComponent } from './formulario/data-binding/hospital/hospital.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    SaludComponent,
    PacienteComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
