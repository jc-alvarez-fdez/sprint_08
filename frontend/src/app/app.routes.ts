import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { ListPacientesComponent } from './_pages/list-pacientes/list-pacientes.component';
import { AddEditPacienteComponent } from './_components/add-edit-paciente/add-edit-paciente.component';
import { HomeComponent } from './_pages/home/home.component';
import { MapaComponent } from './_pages/mapa/mapa.component';
import { AgendaComponent } from './_pages/agenda/agenda.component';
import { EstadisticasComponent } from './_pages/estadisticas/estadisticas.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "listado-pacientes", component: ListPacientesComponent },
  { path: "add", component: AddEditPacienteComponent },
  { path: "edit/:id", component: AddEditPacienteComponent },
  { path: "mapa", component: MapaComponent },
  { path: "agenda", component: AgendaComponent },
  { path: "graficas", component: EstadisticasComponent },
  { path: "**", redirectTo: "", pathMatch:"full" }
];
