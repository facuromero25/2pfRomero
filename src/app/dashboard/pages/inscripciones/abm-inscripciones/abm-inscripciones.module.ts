import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AbmInscripcionesComponent } from './abm-inscripciones.component';




@NgModule({
  declarations: [
    AbmInscripcionesComponent

  ],
  imports: [
    CommonModule,
    CommonModule,
    MatTableModule,
    PipesModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports:[AbmInscripcionesComponent]
})
export class AbmInscripcionesModule { }
