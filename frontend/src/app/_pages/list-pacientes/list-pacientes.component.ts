import { Component, OnInit } from '@angular/core';
import { CommonModule, NumberFormatStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Paciente } from '../../_interfaces/paciente.interface';
import { PacienteService } from '../../_services/paciente.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgressComponent } from '../../_shared/progress/progress.component';


@Component({
  selector: 'app-list-pacientes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProgressComponent
  ],
  templateUrl: './list-pacientes.component.html',
  styleUrl: './list-pacientes.component.css'
})
export class ListPacientesComponent implements OnInit {


  public listPacientes: Paciente [] = [];
  loading: boolean = false;
  constructor (
    private http: HttpClient,
    private _pacienteService: PacienteService,
    private toastr: ToastrService) {}


  ngOnInit(): void {
    this.getListPacientes();
  }

  getListPacientes() {

    this.loading = true;
    this._pacienteService.getListPacientes().subscribe((data: Paciente[]) => {
    this.listPacientes = data;
    this.loading = false;
    })
  }

  deletePaciente(id: number) {
    this.loading = true;
    this._pacienteService.deletePaciente(id).subscribe(data => {
      console.log(data);
      this.getListPacientes();
      this.toastr.warning('El paciente se ha eliminado de la base de datos', 'Paciente eliminado')
    });
    }

}
