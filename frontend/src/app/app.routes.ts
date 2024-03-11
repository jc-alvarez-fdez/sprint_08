import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { ListPacientesComponent } from './_components/list-pacientes/list-pacientes.component';
import { AddEditPacienteComponent } from './_components/add-edit-paciente/add-edit-paciente.component';

export const routes: Routes = [
  { path: "", component: ListPacientesComponent },
  { path: "add", component: AddEditPacienteComponent },
  { path: "edit/:id", component: AddEditPacienteComponent },
  { path: "**", redirectTo: "", pathMatch:"full" }
];
