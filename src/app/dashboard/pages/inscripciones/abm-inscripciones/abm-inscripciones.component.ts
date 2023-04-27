import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InscripcionesService } from '../inscripciones.service';

export interface Inscripciones {
  id: number;
  nombre: string;
  apellido: string;
  fecha_registro: Date;
}
@Component({
  selector: 'app-abm-inscripciones',
  templateUrl: './abm-inscripciones.component.html',
  styleUrls: ['./abm-inscripciones.component.scss']
})
export class AbmInscripcionesComponent {



  dataSource = new MatTableDataSource<Inscripciones>();

  displayedColumns: string[] = ['id', 'nombreCompleto','nombreCursoInscripto', 'fecha_registro'];

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private InscripcionesService: InscripcionesService,
  ) {
    this.InscripcionesService.obtenerAlumnos()
      .subscribe((alumnos) => {
        this.dataSource.data = alumnos;
      })
  }
}
