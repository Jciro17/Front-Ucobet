import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CiudadService } from 'src/app/services/ciudad/ciudad.service';
import { EstadoService } from 'src/app/services/estado/estado.service';

@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css'],
})
export class CrearCiudadComponent implements OnInit {
  ciudadForm: FormGroup;
  estados: any;

  constructor(
    public fb: FormBuilder,
    public estadoService: EstadoService,
    public ciudadService: CiudadService
  ) {
    this.ciudadForm = this.fb.group({
      nombreCiudad: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.estadoService.getAllEstados().subscribe(
      (resp) => {
        this.estados = resp.datos;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  crearCiudad(): void {
    this.ciudadService.saveCiudad(this.ciudadForm.value).subscribe(
      (resp) => {
        alert(resp.mensajes[0]);
        this.ciudadForm.reset();
        console.log(resp);
      },
      (error) => {
        console.error(error);
        alert(error.error.mensajes[0]);
      }
    );
  }
}

