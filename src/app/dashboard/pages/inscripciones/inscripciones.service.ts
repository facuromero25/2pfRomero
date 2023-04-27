import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, map } from 'rxjs';
import { Inscripciones } from './abm-inscripciones/abm-inscripciones.component';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {



  // Subject
  private estudiantes2$ = new Subject<Inscripciones[]>();

  // BehaviorSubject
  private estudiantes$ = new BehaviorSubject<Inscripciones[]>([
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Sosa',
      fecha_registro: new Date()
    },
    {
      id: 2,
      nombre: 'Miriam',
      apellido: 'Paez',
      fecha_registro: new Date()
    },
    {
      id: 3,
      nombre: 'Cynthia',
      apellido: 'Coronel',
      fecha_registro: new Date()
    },
  ])

  constructor() { }

  obtenerAlumnos(): Observable<Inscripciones[]> {
    return this.estudiantes$.asObservable();
  }

  obtenerAlumnoPorId(id: number): Observable<Inscripciones | undefined> {
    return this.estudiantes$.asObservable()
      .pipe(
        map((Inscripciones) => Inscripciones.find((a) => a.id === id))
      )
  }

}
