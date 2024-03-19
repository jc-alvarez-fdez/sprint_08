import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


import { Paciente } from '../../_interfaces/paciente.interface';
import { PacienteService } from '../../_services/paciente.service';
import { ProgressComponent } from '../../_shared/progress/progress.component';


@Component({
  selector: 'app-add-edit-paciente',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ProgressComponent
  ],
  templateUrl: './add-edit-paciente.component.html',
  styleUrl: './add-edit-paciente.component.scss'
})


export class AddEditPacienteComponent implements OnInit{

  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = "Añadir"

  constructor(
    private fb: FormBuilder,
    private _pacienteService: PacienteService,
    private router: Router,
    private toastr: ToastrService,
    private activRouter: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required],
    })
    this.id = Number (activRouter.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  ngOnInit(): void{
    if(this.id !=0) {
      // es editar
      this.operacion = 'Editar ';
      this.getPaciente(this.id);
    }
  }

  addPaciente() {
    const paciente: Paciente = {
      nombre: this.form.value.nombre,
      apellidos: this.form.value.apellidos,
      dni: this.form.value.dni,
      tel: this.form.value.tel,
      email: this.form.value.email,
      direccion: this.form.value.direccion,
    }

    this.loading = true;

    if (this.id !==0) { // es editar
      paciente.id = this.id;
      this._pacienteService.updatePaciente(this.id, paciente).subscribe(() => {
        this.loading = false;
        this.toastr.info(`El paciente ${paciente.nombre} se ha actualizado`, 'Actualizar paciente');
      this.loading = false;
      this.router.navigate(['/listado-pacientes']);
        })

    } else { // es añadir
      this._pacienteService.savePaciente(paciente).subscribe(() => {
        this.toastr.success(`El paciente ${paciente.nombre} se ha añadido`, 'Nuevo paciente');
      this.loading = false;
      this.router.navigate(['/listado-pacientes']);
      })
    }
  }

  getPaciente(id:number) {
    this.loading = true;
    this._pacienteService.getPaciente(id).subscribe((data: Paciente) => {
      console.log(data);
      this.loading = false;
      this.form.setValue({
        nombre: data.nombre,
        apellidos: data.apellidos,
        dni: data.dni,
        tel: data.tel,
        email: data.email,
        direccion: data.direccion
      })
    })
  }

}
